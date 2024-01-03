import React from "react";
import styled from "styled-components";
type ContainerProps = {
  title: string;
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ title, children }) => {
  return (
    <Div>
      <h1>{title}</h1>
      {children}
    </Div>
  );
};

export default Container;

const Div = styled.div`
  flex: 1;

  h1 {
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    margin-bottom: 42px;
  }
`;
