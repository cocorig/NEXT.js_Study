export const useValidation = () => {
  const validatePassword = (password: string) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    return regex.test(password);
  };

  const getPasswordError = (password: string) => {
    if (!validatePassword(password)) {
      return "영어 대문자, 소문자, 숫자, 특수문자 중 3종류 조합하여 8자리 이상으로 입력해 주세요.";
    }
    return "";
  };

  const validateConfirmPassword = (
    confirmPassword?: string,
    originalPassword?: string
  ) => {
    if (originalPassword === "") {
      return "비밀번호를 먼저 입력해주세요.";
    }
    if (confirmPassword !== originalPassword) {
      return "비밀번호가 일치하지 않습니다.";
    }
    return "";
  };

  const validateRequiredFields = (data: Record<string, string>): string => {
    let hasError = false;
    Object.entries(data).forEach(([key, value]) => {
      console.log(data);
      if (value.trim() === "" && key !== "address") {
        hasError = true;
      }
    });
    if (hasError) {
      return "모든 필수 항목을 입력해주세요.";
    }
    return "";
  };

  return { getPasswordError, validateConfirmPassword, validateRequiredFields };
};
