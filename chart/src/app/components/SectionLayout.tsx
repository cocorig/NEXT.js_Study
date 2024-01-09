"use client";
import React from "react";
import styled from "styled-components";

export const SectionContainer = ({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) => {
  return (
    <Container>
      <h1>{title}</h1>
      {children}
    </Container>
  );
};

const Container = styled.section`
  width: 1060px;
  margin: 0 auto;
  h1 {
    text-align: center;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: -0.64px;
    margin: 80px 0px;
    color: #28ff82;
  }
`;
