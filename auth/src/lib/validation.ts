export const useValidation = () => {
  const validatePassword = (password: string) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    return regex.test(password);
  };

  const getPasswordError = (password: string) => {
    if (!validatePassword(password)) {
      return "*영어 대문자, 소문자, 숫자, 특수문자 중 3종류 조합하여 8자리 이상으로 입력해 주세요.";
    }
    return "";
  };

  const validateConfirmPassword = (
    confirmPassword?: string,
    originalPassword?: string
  ) => {
    if (confirmPassword !== originalPassword || originalPassword === "") {
      return false;
    }

    return true;
  };
  const validateEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };
  const validateRequiredFields = (data: Record<string, string>): string => {
    let hasError = false;
    Object.entries(data).forEach(([key, value]) => {
      console.log(data.email, data.password);
      if (value.trim() === "" && key !== "address") {
        hasError = true;
      }
    });
    if (hasError) {
      return "모든 필수 항목을 입력해주세요.";
    }
    return "";
  };

  return {
    getPasswordError,
    validateConfirmPassword,
    validateRequiredFields,
    validateEmail,
  };
};
