"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
type SignUpInputs = {
  nickname: string;
  email: string;
  name: string;
  birthdate: string;
  address: string;
  password: string;
  passwordConfirm: string;
  firstNum: number;
  secondNum: number;
  thirdNum: number;
  emailLocal: string;
  emailDomain: string;
  detailAddress: string;
  year: number;
  month: number;
  day: number;
};

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<SignUpInputs>({ mode: "onChange" });

  const [showPasswordCriteria, setShowPasswordCriteria] =
    useState<boolean>(false);
  const [passwordMatch, setPasswordMatch] = useState<boolean | null>(null);
  const password = watch("password", "");
  const passwordConfirm = watch("passwordConfirm", "");
  const emailLocal = watch("emailLocal") || "";
  const emailDomain = watch("emailDomain") || "";
  const [isActive, setIsActive] = useState<boolean>(false);
  useEffect(() => {
    if (password) {
      const regex =
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      setShowPasswordCriteria(!regex.test(password));
    }
    setPasswordMatch(password === passwordConfirm);
  }, [password, passwordConfirm]);
  const watchAll = Object.values(watch());

  useEffect(() => {
    if (watchAll.every((el) => el)) {
      if (passwordMatch && passwordConfirm) {
        setIsActive(true);
      }
    } else {
      setIsActive(false);
    }
  }, [watchAll]);
  console.log(isActive);
  const onSubmit = async (data: SignUpInputs) => {
    try {
      const {
        firstNum,
        secondNum,
        thirdNum,
        emailDomain,
        emailLocal,
        year,
        month,
        day,
        address,
        detailAddress,
        ...rest
      } = data;
      const Address = `${address}${detailAddress}`;
      const Phone = `${firstNum}${secondNum}${thirdNum}`;
      const FullEmail = `${emailLocal}@${emailDomain}`;
      const Birthdate = `${year}-${month}-${day}`;
      const Data = {
        ...rest,
        Phone,
        Birthdate,
        FullEmail,
        Address,
      };

      // 여기서 서버로 데이터 전송
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Data),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Server response:", responseData);
      } else {
        console.error("Server error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleNonNumericInput = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    const numericRegex = /^[0-9\b]+$/;

    if (!numericRegex.test(keyValue)) {
      event.preventDefault();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          닉네임
          <input {...register("nickname")} required />
        </label>
        {errors.nickname && <p>{errors.nickname.message}</p>}
      </div>

      <div>
        <label htmlFor="emailLocal">
          이메일
          <input
            type="text"
            {...register("emailLocal")}
            required
            value={emailLocal}
            onChange={(e) => setValue("emailLocal", e.target.value)}
          />
          <span>@</span>
          <input
            type="text"
            {...register("emailDomain")}
            required
            value={emailDomain}
            onChange={(e) => setValue("emailDomain", e.target.value)}
          />
          <select
            {...register("emailDomain")}
            value={emailDomain}
            onChange={(e) => setValue("emailDomain", e.target.value)}
          >
            <option value="">직접 입력</option>
            <option value="naver.com">naver.com</option>
            <option value="google.com">google.com</option>
            <option value="kakao.com">kakao.com</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          이름
          <input {...register("name")} required />
        </label>
      </div>
      <div>
        <label>
          주소
          <input type="text" {...register("address")} required />
          <input
            type="text"
            placeholder="상세주소"
            {...register("detailAddress")}
            required
          />
        </label>
      </div>
      <div>
        <label>
          휴대폰 번호
          <input
            {...register("firstNum")}
            type="text"
            maxLength={3}
            placeholder="010"
            required
            onKeyDown={handleNonNumericInput}
          />
          <input
            {...register("secondNum")}
            type="text"
            maxLength={4}
            placeholder="1234"
            required
            onKeyDown={handleNonNumericInput}
          />
          <input
            {...register("thirdNum")}
            type="text"
            maxLength={4}
            placeholder="5678"
            required
            onKeyDown={handleNonNumericInput}
          />
        </label>
        <div>
          <label htmlFor="">
            생년월일
            <input
              type="text"
              maxLength={4}
              required
              placeholder="년(2024)"
              onKeyDown={handleNonNumericInput}
              {...register("year", {
                // pattern: {
                //   value: /^\d{4}$/,
                //   message: "올바른 년도 형식을 입력하세요 (예: 2023)",
                // },
              })}
            />
            <input
              type="text"
              placeholder="월(12)"
              maxLength={2}
              required
              onKeyDown={handleNonNumericInput}
              {...register("month", {
                // pattern: {
                //   value: /^(0?[1-9]|1[0-2])$/,
                //   message: "올바른 월 형식을 입력하세요 (1 ~ 12 사이)",
                // },
              })}
            />
            <input
              type="text"
              placeholder="일(31)"
              maxLength={2}
              required
              onKeyDown={handleNonNumericInput}
              {...register("day", {
                // pattern: {
                //   value: /^(0?[1-9]|[1-2][0-9]|3[0-1])$/,
                //   message: "올바른 일 형식을 입력하세요 (1 ~ 31 사이)",
                // },
              })}
            />
          </label>
        </div>
      </div>
      <div>
        <label htmlFor="">
          비밀번호
          <input
            required
            type="password"
            {...register("password", {
              pattern:
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            })}
          />
        </label>
        {errors.password && <p>{errors.password.message}</p>}
        {showPasswordCriteria && (
          <p>
            *영어 대문자, 소문자, 숫자, 특수문자 중 3종류 조합하여 8자리
            이상으로 입력해 주세요.
          </p>
        )}
      </div>
      <div>
        <label htmlFor="">
          비밀번호 확인
          <input type="password" required {...register("passwordConfirm")} />
        </label>
        {!passwordMatch && passwordConfirm && (
          <p>새 비밀번호가 일치하지 않습니다.</p>
        )}
        {passwordMatch && passwordConfirm && (
          <span>새 비밀번호와 일치합니다.</span>
        )}
      </div>

      <SubmitButton type="submit" disabled={!isActive}>
        다음으로
      </SubmitButton>
    </form>
  );
};

export default SignUp;

const SubmitButton = styled.button<{ disabled: boolean }>`
  background-color: ${({ disabled }) => (disabled ? "#F3F3F3" : "#4C8BFF")};
  color: ${({ disabled }) =>
    disabled ? "#999" : "white"}; /* fix color value */
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  outline: none;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  &:disabled {
    background-color: #f3f3f3;
    pointer-events: none;
  }

  &:not(:disabled):active {
    background-color: #0059ff;
  }
`;
