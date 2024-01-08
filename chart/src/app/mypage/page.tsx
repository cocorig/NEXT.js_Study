"use client";
import React from "react";
import Chart from "./Chart";
import styled from "styled-components";
type Props = {};

const page = (props: Props) => {
  return (
    <ChartContainer>
      <Chart />
    </ChartContainer>
  );
};

export default page;

const ChartContainer = styled.div`
  /* width: 210px;
  height: 174px; */
`;
