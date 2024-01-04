"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import google from "../../public/google.svg";
import naver from "../../public/naver.svg";
import kakao from "../../public/kakao.svg";
import styled from "styled-components";
const LoginButton = () => {
  const { data: session } = useSession();
  console.log(session);
  if (session && session.user) {
    return (
      <div>
        <button onClick={() => signOut()}>로그아웃</button>
      </div>
    );
  }
  return (
    <SnsBtnContainer>
      <p>SNS로 간편하게 시작하기</p>
      <div>
        <button
          onClick={() => signIn("kakao", { redirect: true, callbackUrl: "/" })}
        >
          <Image src={kakao} alt="카카오톡 로그인" />
        </button>
        <button
          onClick={() => signIn("naver", { redirect: true, callbackUrl: "/" })}
        >
          <Image src={naver} alt="네이버 로그인" />
        </button>
        <button
          onClick={() => signIn("google", { redirect: true, callbackUrl: "/" })}
        >
          <Image src={google} alt="구글 로그인" />
        </button>
      </div>
    </SnsBtnContainer>
  );
};

const SnsBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
`;
export default LoginButton;
