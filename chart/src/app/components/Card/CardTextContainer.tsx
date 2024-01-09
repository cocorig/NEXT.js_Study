import React from "react";
import styled from "styled-components";

interface CardTextContainerProps {
  children: React.ReactNode;
  $BgColor: string;
}

export const CardTextContainer = ({
  children,
  $BgColor,
}: CardTextContainerProps) => {
  return <TextContainer $BgColor={$BgColor}>{children}</TextContainer>;
};

const TextContainer = styled.div<{ $BgColor: string }>`
  width: 100%;
  background-color: ${(props) => `var(${props.$BgColor})`};
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-height: 178px;
  border-radius: 8px;
`;
