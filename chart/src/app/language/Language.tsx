"use client";
import React from "react";
import CommonButton from "@/app/components/Button";

type LanguageProps = {
  name: string;
};

const Language: React.FC<LanguageProps> = ({ name }) => {
  return <CommonButton label={name} theme="primary" size="small" />;
};

export default Language;
