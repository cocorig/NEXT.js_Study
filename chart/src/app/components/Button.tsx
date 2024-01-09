import styled, { css } from "styled-components";

interface ButtonProps {
  label?: string;
  theme: string;
  size: string;
}

type Size = {
  [key: string]: {
    padding: string;
    fontSize: string;
    borderRadius?: string;
  };
};

type Theme = {
  [key: string]: {
    backgroundColor: string;
    color: string;
    borderColor?: string;
  };
};
CommonButton.defaultProps = {
  theme: "primary",
  size: "medium",
};
const sizes: Size = {
  small: {
    padding: "10px 15px",
    fontSize: "12px",
  },
  medium: {
    padding: "15px 20px",
    fontSize: "16px",
    borderRadius: "50px",
  },
  large: {
    padding: "20px 25px",
    fontSize: "20px",
  },
};

const themes: Theme = {
  primary: {
    backgroundColor: "#011e2b",
    color: "#28ff82",
    borderColor: "#28ff82",
  },
  secondary: {
    backgroundColor: "#000000",
    color: "#fff",
    borderColor: "none",
  },
};
function CommonButton({ label, theme, size }: ButtonProps) {
  return (
    <Button size={size} theme={theme}>
      {label}
    </Button>
  );
}

export default CommonButton;

const sizeStyles = css<ButtonProps>`
  ${({ size }) => css`
    padding: ${sizes[size].padding};
    font-size: ${sizes[size].fontSize};
    border-radius: ${sizes[size].borderRadius};
  `}
`;

const themeStyles = css<ButtonProps>`
  ${({ theme }) => css`
    background-color: ${themes[theme].backgroundColor};
    color: ${themes[theme].color};
    border: 1px solid ${themes[theme].borderColor};
  `}
`;

const Button = styled.button<ButtonProps>`
  /* 기본값 */
  border-radius: 6px;
  font-weight: 600;
  letter-spacing: 0.4px;
  /* size */
  ${sizeStyles}

  /* theme */ 
  
  ${themeStyles}
`;
