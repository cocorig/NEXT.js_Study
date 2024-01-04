import React from "react";
import styled from "styled-components";

interface IProps {
  text: string;
  name: string;
  inputType?: string;
  register: any;
  errorMsg?: string;
  id: string;
  placeholder?: string;
  error?: boolean;
  border?: boolean;
  eye?: boolean;
  borderRadius?: string;
}

const Input = styled.input<IProps>`
  width: 100%;
  font-size: 16px;
  height: 50px;
  border: ${({ border }) => (border ? "1px solid 4D4D4D" : "none")};
  border-radius: ${({ borderRadius }) => ({ borderRadius })};
  transition: border-color 0.3s;
  border-bottom: ${({ error }) =>
    error ? "2px solid #ff0000" : "1px solid #ccc"};
  &::placeholder {
    color: ${({ error }) => (error ? "#ff0000" : "#4D4D4D")};
  }
  outline: none;
`;

const Label = styled.label`
  font-size: 18px;
  margin-bottom: 12px;
`;
const EyeBtn = styled.button`
  position: absolute;
  right: 0;
  margin: auto 2px;
  height: 30px;
  cursor: pointer;
  bottom: 0;
`;
const ErrorMsg = styled.span``;

const TextField: React.FC<IProps> = ({
  text,
  name,
  id,
  inputType = "text",
  register,
  errorMsg,
  placeholder,
  error,
  eye,
  borderRadius,
}) => {
  console.log(error);
  console.log(errorMsg);
  return (
    <>
      <Label htmlFor={name}>{text}</Label>
      <Input
        id={id}
        type={inputType}
        {...register(name, {
          required: true,
        })}
        placeholder={placeholder}
        error={error}
        borderRadius={borderRadius}
      />
      {eye && <EyeBtn>눈모양</EyeBtn>}
      {error && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </>
  );
};

export default TextField;
// {...register("passwordConfirm", {
//             required: "비밀번호를 입력해주세요",
//             validate: (value) =>
//               value === password || "비밀번호가 일치하지 않습니다.",
//           })}
