"use client";
import Providers from "@/components/Providers";
import LoginButton from "@/components/LoginButton";
import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import TextField from "@/components/TextField";
import Link from "next/link";
import CheckField from "@/components/CheckField";

interface FormValue {
  email: string;
  password: string;
}
const FieldWrapper = styled.div`
  margin-bottom: 27px;
  position: relative;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;

  gap: 36px;
`;
const LoginInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FindInfoContainer = styled.div`
  display: flex;
  align-items: center;
  span {
    display: inline-block;
    width: 2px;
    height: 16px;
    margin: 0px 4px;
    background-color: #666;
  }
`;
const Login = () => {
  const [isChecked, setIsChecked] = React.useState(false);
  const {
    register, //input 요소를 React hook form과 연결해 검증 규칙을 적용할 수 있게 하는 메소드
    handleSubmit, // form을 submit했을 때 실행할 함수
    formState: { errors }, // form state에 관한 정보를 담고 있는 객체 , error :  input 값들의 에러 정보를 가지고 있는 객체
    getValues, //input 값을 가져올 수 있는 함수
  } = useForm<FormValue>({ mode: "onChange" }); // onChange : input 값이 바뀔 때마다 검증 로직이 동작

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <FieldWrapper>
          <TextField
            id="email"
            text="이메일"
            name="email"
            register={register}
            placeholder="이메일을 입력해주세요"
            errorMsg={errors.email ? errors.email.message : ""}
            error={!!errors.email}
            borderRadius="none"
          />
        </FieldWrapper>

        <FieldWrapper>
          <TextField
            id="password"
            text="비밀번호"
            name="password"
            inputType="password"
            register={register}
            placeholder="비밀번호를 입력해주세요"
            errorMsg={errors.password ? errors.password.message : ""}
            error={!!errors.password}
            eye
            borderRadius="none"
          />
        </FieldWrapper>
        <button type="submit">로그인</button>
      </LoginForm>
      <LoginInfo>
        <CheckField
          title="로그인 유지하기"
          name="logincheck"
          id="logincheck"
          color="#666"
          fontWeight="400"
        />
        <FindInfoContainer>
          <Link href="/">아이디 찾기</Link>
          <span></span>
          <Link href="/">비밀번호 찾기</Link>
        </FindInfoContainer>
      </LoginInfo>
      {/* sns login */}
      <Providers>
        <LoginButton />
      </Providers>
      <div>
        <p>스팩폴리오가 처음이신가요?</p>
        <Link href="" color="blue">
          가입하기
        </Link>
      </div>
    </>
  );
};

export default Login;
