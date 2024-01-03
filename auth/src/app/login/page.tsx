"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { FormState } from "@/lib/FormState";
import { FiEye, FiEyeOff } from "react-icons/fi";
const StyledInput = styled.input<{ isError: boolean }>`
  border-bottom: 2px solid ${(props) => (props.isError ? "red" : "black")};
  &::placeholder {
    color: ${(props) => (props.isError ? "red" : "black")};
  }
`;
export default function LoginPage() {
  const {
    formData,
    handleInputChange,
    errorEmail,
    errorPassword,
    handleSubmit,
    handleEmailChange,
    errorFieldEmail,
    errorFieldPassword,
    showPassword,
    togglePasswordVisibility,
    handlePasswordChange,
  } = FormState();

  const [showMessage, setShowMessage] = useState(false);
  const isLoginInvalid = errorFieldEmail && errorFieldPassword;

  const handleLoginClick = () => {
    if (isLoginInvalid == false) {
      setShowMessage(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <StyledInput
            type="text"
            name="email"
            placeholder="이메일을 입력하세요."
            value={formData.email}
            onChange={(e) => {
              handleInputChange(e);
              handleEmailChange(e.target.value);
            }}
            isError={errorEmail}
          />
          <StyledInput
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="비밀번호"
            value={formData.password}
            isError={errorPassword}
            onChange={(e) => {
              handleInputChange(e);
              handlePasswordChange(e.target.value);
            }}
          />
          {showMessage && (
            <p style={{ color: "red" }}>
              잘못된 이메일 혹은 비밀번호입니다. 다시 입력해주세요.
            </p>
          )}
          <button type="button" onClick={togglePasswordVisibility}>
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>
        <button type="submit" onClick={handleLoginClick}>
          로그인
        </button>
      </form>
    </div>
  );
}
