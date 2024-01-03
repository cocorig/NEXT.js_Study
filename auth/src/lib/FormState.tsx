import { useState } from "react";
import { useValidation } from "@/lib/validation";

export const FormState = () => {
  const {
    getPasswordError, // 회색
    validateConfirmPassword, // 빨간색
    validateRequiredFields, //빨간색
    validateEmail,
  } = useValidation();

  const [formData, setFormData] = useState({
    nickname: "",
    password: "",
    confirmPassword: "",
    name: "",
    birthday: "",
    phoneNumber: "",
    email: "",
    address: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [requiredFieldsError, setRequiredFieldsError] = useState("");
  const [errorEmail, setErrorEmail] = useState(false); // 에러 상태 추가
  const [errorPassword, setErrorPassword] = useState(false); // 에러 상태 추가
  const [errorFieldEmail, setErrorFieldEmail] = useState(false);
  const [errorFieldPassword, setErrorFieldPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (value.trim() !== "") {
      setRequiredFieldsError("");
    }
  };

  const validatePassword = (password: string) => {
    const error = getPasswordError(password);

    setPasswordError(error);
    return error === "";
  };

  const handlePasswordChange = (password: string) => {
    const error = validatePassword(password);
    setErrorFieldPassword(error); // true면 통과
  };

  const handleConfirmPasswordChange = (confirmPassword: string) => {
    const isPasswordMatch = validateConfirmPassword(
      confirmPassword,
      formData.password
    );

    setConfirmPassword(isPasswordMatch ? "새 비밀번호와 일치합니다." : "");
    setConfirmPasswordError(
      isPasswordMatch ? "" : "비밀번호가 일치하지 않습니다."
    );
  };
  const handleEmailChange = (email: string) => {
    const isEmailValid = validateEmail(email);
    console.log("이메일 " + isEmailValid);
    setErrorFieldEmail(isEmailValid); //true면 통과
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const requiredFieldsErrorMsg = validateRequiredFields(formData);
    setRequiredFieldsError(requiredFieldsErrorMsg);
    if (!requiredFieldsErrorMsg) {
      console.log(formData);
    }

    setErrorEmail(!formData.email);
    setErrorPassword(!formData.password);
  };
  return {
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
    errorEmail,
    errorPassword,
    confirmPassword,
    handleEmailChange,
    validatePassword,
    errorFieldEmail,
    errorFieldPassword,
  };
};
