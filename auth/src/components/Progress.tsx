"use client";
import React from "react";
import styled from "styled-components";
import { usePathname } from "next/navigation";
interface ProgressTrackerProps {
  steps: string[];
  stepNames: string[];
}

const Progress = ({ steps, stepNames }: ProgressTrackerProps) => {
  const pathname = usePathname();

  return (
    <StepsContainer>
      {steps.map((step, index) => {
        const isActive = pathname.includes(step);
        return (
          <Step key={index} isActive={isActive}>
            <StepNumber isActive={isActive}>{index + 1}</StepNumber>
            <StepName isActive={isActive}>{stepNames[index]}</StepName>
            {index < steps.length - 1 && <ProgressIcon />}
          </Step>
        );
      })}
    </StepsContainer>
  );
};

const StepsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Step = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const StepNumber = styled.div<{ isActive: boolean }>`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${(props) => (props.isActive ? "black" : "gray")};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  color: white;
`;

const StepName = styled.div<{ isActive: boolean }>`
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
`;

const ProgressIcon = styled.div`
  width: 27px;
  height: 10px;
  background-image: url("/progress.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-left: 30px;
  margin-right: 30px;
`;
export default Progress;
