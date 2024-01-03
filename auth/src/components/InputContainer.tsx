import styled, { css } from "styled-components";

interface StyledInputContainerProps {
  isFlex?: boolean;
  hasGap?: boolean;
  isFlexCol?: boolean;
  shouldShowAtContent?: boolean;
}

const StyledInputContainer = styled.div<StyledInputContainerProps>`
  ${({ isFlexCol }) =>
    isFlexCol &&
    css`
      display: flex;
      flex-direction: column;
      gap: 8px;
    `}

  ${({ isFlex }) =>
    isFlex &&
    css`
      display: flex;
    `}
    ${({ hasGap }) =>
    hasGap &&
    css`
      gap: 12px;
    `}
    span {
    height: 100%;
  }
  span::before {
    content: ${({ shouldShowAtContent }) =>
      shouldShowAtContent ? "'@'" : "'-'"};
    font-size: 14px;
    color: rgb(204, 204, 204);
    text-align: center;
    line-height: 40px;
  }
`;

interface InputContainerProps extends StyledInputContainerProps {
  children: React.ReactNode;
}

const InputContainer = ({
  children,
  shouldShowAtContent,
  ...props
}: InputContainerProps) => {
  return (
    <StyledInputContainer {...props} shouldShowAtContent={shouldShowAtContent}>
      {children}
    </StyledInputContainer>
  );
};

export default InputContainer;
