"use client";
import Input from "@/components/Input";
import LabeledInput from "@/components/LabeledInput";
import { FormState } from "@/lib/FormState";
import Container from "./Container";
import InputContainer from "@/components/InputContainer";
import styled from "styled-components";
import Image from "next/image";
import authImage from "../../../public/authImage.svg";
import Button from "@/components/Button";
type Props = {};

const page = (props: Props) => {
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
    <Section>
      <Container title="로그인">
        <LabeledInput label="이메일" htmlFor="email">
          <InputContainer isFlex hasGap shouldShowAtContent>
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
        <Button destination="" borderRadius="50px" backgroundColor="#000000">
          로그인
        </Button>
      </Container>
      <Container title="회원가입">
        <div>
          <p>
            아직 스팩폴리오 회원이 아니신가요? <br />
            회원가입을 하시면 다양한 서비스를 편리하게 이용하실 수 있습니다.
          </p>
        </div>
        <ImageContainer>
          <Image src={authImage} alt="" />

          <Button
            destination=""
            color="#000000"
            borderColor="#000000"
            borderRadius="50px"
          >
            회원가입
          </Button>
        </ImageContainer>
      </Container>
    </Section>
  );
};

export default page;

const Section = styled.section`
  max-width: 1060px;
  display: flex;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
