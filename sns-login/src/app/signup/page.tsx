"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

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
};

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
  } = useForm<SignUpInputs>();

  const [showPasswordCriteria, setShowPasswordCriteria] =
    useState<boolean>(false);
  const [passwordMatch, setPasswordMatch] = useState<boolean | null>(null);
  const [emailLocal, setEmailLocal] = useState("");
  const [emailDomain, setEmailDomain] = useState("");
  const password = watch("password", "");
  const passwordConfirm = watch("passwordConfirm", "");

  useEffect(() => {
    if (password) {
      const regex =
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      setShowPasswordCriteria(!regex.test(password));
    }
    setPasswordMatch(password === passwordConfirm);
  }, [password, passwordConfirm]);

  const onSubmit = async (data: SignUpInputs) => {
    try {
      const combinedNumber = Object.values(data).join("");
      const fullEmail = `${emailLocal}@${emailDomain}`;
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          Nickname:
          <input {...register("nickname")} />
        </label>
        {errors.nickname && <p>{errors.nickname.message}</p>}
      </div>
      <input
        type="text"
        value={emailLocal}
        onChange={(e) => setEmailLocal(e.target.value)}
      />
      <span>@</span>
      <input
        type="text"
        value={emailDomain}
        onChange={(e) => setEmailDomain(e.target.value)}
      />

      <select
        value={emailDomain}
        onChange={(e) => setEmailDomain(e.target.value)}
      >
        <option value="">직접 입력</option>
        <option value="naver.com">naver.com</option>
        <option value="google.com">google.com</option>
      </select>
      <div>
        <label>
          Name:
          <input {...register("name")} />
        </label>
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label>
          Birthdate:
          <input {...register("birthdate")} />
        </label>
        {errors.birthdate && <p>{errors.birthdate.message}</p>}
      </div>
      <div>
        <label>
          Address:
          <input {...register("address")} />
        </label>
        {errors.address && <p>{errors.address.message}</p>}
      </div>
      <div>
        <label>
          Phone
          <input
            {...register("firstNum")}
            type="text"
            maxLength={3}
            placeholder="010"
          />
          <input
            {...register("secondNum")}
            type="text"
            maxLength={4}
            placeholder="1234"
          />
          <input
            {...register("thirdNum")}
            type="text"
            maxLength={4}
            placeholder="5678"
          />
        </label>

        {/* {errors.phone && <p>{errors.phone.message}</p>} */}
      </div>
      {/* <div>
        <label htmlFor="">
          비밀번호
          <input
            type="password"
            {...register("password", {
              required: "비밀번호를 입력해주세요",
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
          <input
            type="password"
            {...register("passwordConfirm", {
              required: "비밀번호를 입력해주세요",
              validate: (value) =>
                value === password || "비밀번호가 일치하지 않습니다.",
            })}
          />
        </label>

        {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
        {!passwordMatch && passwordConfirm && (
          <p>비밀번호가 일치하지 않습니다.</p>
        )}
        {passwordMatch && passwordConfirm && <p>새 비밀번호와 일치합니다.</p>}
      </div> */}
      <input type="submit" value="가입하기" />
    </form>
  );
};

export default SignUp;
