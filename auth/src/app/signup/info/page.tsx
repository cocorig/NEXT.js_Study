"use client";
import React from "react";
import LabeledInput from "@/components/LabeledInput";
import { FormState } from "@/lib/FormState";
import Input from "@/components/Input";
import InputContainer from "@/components/InputContainer";
import styled from "styled-components";
type Props = {};

export default function page({}: Props) {
  const {
    formData,
    showPassword,
    passwordError,
    confirmPasswordError,
    requiredFieldsError,
    confirmPassword,
    togglePasswordVisibility,
    handleInputChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleSubmit,
    // handleEmailChange,
  } = FormState();

  return (
    <Form onSubmit={handleSubmit}>
      <section>
        <LabeledInput
          required
          label="닉네임"
          htmlFor="nickname"
          showButton={true}
          buttonText="중복 확인"
          destination="/"
        >
          <InputContainer>
            <Input
              id="nickname"
              type="text"
              name="nickname"
              onChange={handleInputChange}
              value={formData.nickname}
              placeholder="닉네임을 입력해주세요"
            />
          </InputContainer>
        </LabeledInput>
        <LabeledInput
          required
          label="비밀번호"
          htmlFor="password"
          Message={passwordError}
        >
          <InputContainer>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="비밀번호를 입력해주세요"
              value={formData.password}
              onChange={(e) => {
                handleInputChange(e);
                handlePasswordChange(e.target.value);
              }}
            />
          </InputContainer>
        </LabeledInput>
        <LabeledInput
          required
          label="비밀번호 확인"
          htmlFor="confirmPassword"
          failedMessage={confirmPasswordError}
          successMessage={confirmPassword}
        >
          <InputContainer>
            <Input
              value={formData.confirmPassword}
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="비밀번호를 입력해주세요"
              onChange={(e) => {
                handleInputChange(e);
                handleConfirmPasswordChange(e.target.value);
              }}
            />
          </InputContainer>
        </LabeledInput>
      </section>
      <section>
        <LabeledInput required label="생년월일" htmlFor="birthday">
          <InputContainer isFlex hasGap>
            <Input
              width={200}
              type="text"
              name="birthYear"
              id="name"
              placeholder="연"
              value={formData.birthday}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              name="birthYear"
              id="name"
              placeholder="월"
              value={formData.birthday}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              name="birthYear"
              id="name"
              placeholder="일"
              value={formData.birthday}
              onChange={handleInputChange}
            />
          </InputContainer>
        </LabeledInput>
        <LabeledInput required label="휴대폰 번호" htmlFor="phoneNumber">
          <InputContainer isFlex hasGap>
            <Input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              width={120}
            />
            <span />
            <Input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              width={120}
            />
            <span />
            <Input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              width={120}
            />
          </InputContainer>
        </LabeledInput>
        <LabeledInput label="이메일" htmlFor="email">
          <InputContainer isFlex hasGap shouldShowAtContent>
            <Input
              type="text"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <span />
            <Input
              type="text"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </InputContainer>
        </LabeledInput>
        <LabeledInput
          label="주소"
          htmlFor="address"
          showButton={true}
          buttonText="우편번호 찾기"
          destination="/"
        >
          <InputContainer isFlexCol>
            <Input
              type="text"
              name="address"
              id="address"
              value={formData.address}
              onChange={handleInputChange}
            />
            <Input
              type="address"
              name="address"
              id="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="상세주소를 입력해주세요"
            />
          </InputContainer>
        </LabeledInput>
      </section>
    </Form>
  );
}
const Form = styled.form`
  width: 740px;
  margin: 0px auto;

  section {
    padding: 68px 0px;
  }
  section:first-child {
    border-bottom: 1px solid #ccc;
  }
`;
