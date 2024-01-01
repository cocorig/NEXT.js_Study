"use client";

import styled from "styled-components";
import { useFormState } from "@/lib/useFormState";
const StyledInput = styled.input<{ isError: boolean }>`
  border-bottom: 2px solid ${(props) => (props.isError ? "red" : "black")};
  color: ${(props) => (props.isError ? "red" : "black")};
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
  } = useFormState();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <StyledInput
            type="email"
            name="email"
            placeholder="이메일을 입력하세요."
            value={formData.email}
            onChange={handleInputChange}
            isError={errorEmail}
          />
          <StyledInput
            type="password"
            name="password"
            placeholder="비밀번호를 입력하세요."
            value={formData.password}
            onChange={handleInputChange}
            isError={errorPassword}
          />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
