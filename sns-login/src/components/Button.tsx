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
  width: ${({ width }) => width};
  border-radius: ${({ borderRadius }) => borderRadius};
  color: ${({ color }) => color || "white"};
  background-color: ${({ backgroundColor }) => backgroundColor || "white"};
  text-decoration: none;
  font-size: ${({ fontSize }) => fontSize || "18px"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  border: 1px solid ${({ borderColor }) => borderColor || ""};
  font-weight: 600;
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
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
