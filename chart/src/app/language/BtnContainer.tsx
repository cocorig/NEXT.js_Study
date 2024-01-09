"use client";
import React from "react";
import styled from "styled-components";

const BtnContainer = ({ children }: React.PropsWithChildren<{}>) => {
  return <Container>{children}</Container>;
};

export default BtnContainer;

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px 20px;
  li {
    background-color: #011e2b;
    height: 300px;
    padding: 15px;
    border-radius: 4px;
  }
`;
