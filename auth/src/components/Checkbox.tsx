import React from "react";
import styled from "styled-components";

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const CheckboxInput = styled.input`
  margin: 0;
`;

interface CheckboxProps {
  name: string;
  checked: boolean;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  checked,
  label,
  onChange,
}) => {
  return (
    <CheckboxContainer>
      <CheckboxInput
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </CheckboxContainer>
  );
};

export default Checkbox;
