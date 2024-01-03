import styled from "styled-components";
import { useRouter } from "next/navigation";
interface ButtonProps {
  destination: string;
  children: React.ReactNode;
  disabled?: boolean;
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
  borderRadius?: string;
  padding?: string;
  borderColor?: string;
  width?: string;
  height?: string;
}

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.padding || "16px 64px"};
  border-radius: ${(props) => props.borderRadius || "4px"};
  color: ${(props) => props.color || "white"};
  background-color: ${(props) => props.backgroundColor || "white"};
  text-decoration: none;
  font-size: ${(props) => props.fontSize || "18px"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  border: 1px solid ${(props) => props.borderColor || ""};
  font-weight: 600;
  width: ${(props) => props.width || "auto"}; // 너비 설정
  height: ${(props) => props.height || "auto"}; // 높이 설정
`;

const Button: React.FC<ButtonProps> = ({
  destination,
  children,
  disabled,
  color,
  backgroundColor,
  fontSize,
  borderRadius,
  padding,
  borderColor,
  width,
  height,
}) => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.replace(destination);
  };

  return (
    <StyledButton
      onClick={handleButtonClick}
      disabled={disabled}
      color={color}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      borderRadius={borderRadius}
      padding={padding}
      borderColor={borderColor}
      destination={destination}
      width={width}
      height={height}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
