import { useState } from "react";
import { useValidation } from "@/lib/validation";

export const useFormState = () => {
  const { getPasswordError, validateConfirmPassword, validateRequiredFields } =
    useValidation();

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
  const [requiredFieldsError, setRequiredFieldsError] = useState("");
  const [errorEmail, setErrorEmail] = useState(false); // 에러 상태 추가
  const [errorPassword, setErrorPassword] = useState(false); // 에러 상태 추가

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
    validatePassword(password);
  };

  const handleConfirmPasswordChange = (confirmPassword: string) => {
    const confirmPasswordError = validateConfirmPassword(
      confirmPassword,
      formData.password
    );
    setConfirmPasswordError(confirmPasswordError);
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
  };
};
