// layout.tsx

import React from "react";
import Progress from "@/components/Progress";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const steps = [
    { stepName: "본인인증 및 약관동의", path: "terms" },
    { stepName: "정보 입력", path: "info" },
    { stepName: "관심사 선택", path: "interests" },
    { stepName: "회원가입 완료", path: "complete" },
  ];
  const stepNames = steps.map((step) => step.stepName);

  return (
    <div>
      <h1>회원가입</h1>
      <Progress steps={steps.map((step) => step.path)} stepNames={stepNames} />
      {children}
    </div>
  );
};

export default Layout;
