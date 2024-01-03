"use client";

import { FiEye, FiEyeOff } from "react-icons/fi";
import { FormState } from "@/lib/FormState";
const SignUpForm = () => {
  const {
    formData,
    showPassword,
    passwordError,
    confirmPasswordError,
    requiredFieldsError,
    togglePasswordVisibility,
    handleInputChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleSubmit,
    // handleEmailChange,
  } = FormState();

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="nickname"
          placeholder="닉네임"
          value={formData.nickname}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="비밀번호"
          value={formData.password}
          onChange={(e) => {
            handleInputChange(e);
            handlePasswordChange(e.target.value);
          }}
        />
        <button type="button" onClick={togglePasswordVisibility}>
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </button>
        {passwordError && <span>{passwordError}</span>}
      </div>
      <div>
        <input
          type={showPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="비밀번호 확인"
          value={formData.confirmPassword}
          onChange={(e) => {
            handleInputChange(e);
            handleConfirmPasswordChange(e.target.value);
          }}
        />
        {confirmPasswordError && <span>{confirmPasswordError}</span>}
      </div>
      <div>
        <input
          type="text"
          name="name"
          placeholder="이름"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="birthday"
          placeholder="생년월일"
          value={formData.birthday}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="phoneNumber"
          placeholder="휴대번호"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="이메일 주소"
          value={formData.email}
          onChange={(e) => {
            handleInputChange(e);
            // handleEmailChange(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          name="address"
          placeholder="주소"
          value={formData.address}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">가입하기</button>
      {requiredFieldsError && <span>{requiredFieldsError}</span>}
    </form>
  );
};

export default SignUpForm;
