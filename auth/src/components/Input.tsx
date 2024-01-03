import styled from "styled-components";

interface LabeledInputProps {
  id: string;
  type: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value: string;
  width?: number;
}

const Input = ({
  id,
  type,
  name,
  onChange,
  placeholder,
  value,
  width,
}: LabeledInputProps) => {
  return (
    <InputStyled
      id={id}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      width={width}
    />
  );
};

const InputStyled = styled.input`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: 40px;
  padding: 0px 11px 1px 15px;
  border-radius: 4px;
  border: 1px solid rgb(221, 221, 221);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: rgb(51, 51, 51);
  outline: none;
  box-sizing: border-box;
`;
export default Input;
