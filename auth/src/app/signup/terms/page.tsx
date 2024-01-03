"use client";
import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Checkbox from "@/components/Checkbox";
import Button from "@/components/Button";
interface Agreement {
  name: string;
  label: string;
}

const agreements: Agreement[] = [
  { name: "require", label: "[필수] 본인인증 약관 전체동의" },
  { name: "agreement1", label: "서비스 이용약관 동의" },
  { name: "agreement2", label: "개인정보 수집 이용 동의" },
  { name: "agreement3", label: "고유식별 정보처리 동의" },
  { name: "agreement4", label: "통신사 이용약관 동의" },
];

type CheckboxStates = Record<string, boolean>;

const CheckboxContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 772px;
  border-top: 2px solid #4d4d4d;
  border-bottom: 2px solid #4d4d4d;
  li {
    display: flex;
    align-items: center;
    height: 60px;
    border-bottom: 1px solid #ccc;
  }
  li:first-child,
  li:last-child {
    height: 74px;
  }

  li:last-child {
    border-bottom: none;
  }
`;

const TermsAgreement = () => {
  const initialState: CheckboxStates = agreements.reduce(
    (acc, cur) => ({ ...acc, [cur.name]: false }),
    {}
  );

  const [checkboxStates, setCheckboxStates] =
    useState<CheckboxStates>(initialState);
  const [isButtonActive, setButtonActive] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    if (name === "require") {
      const newStates = Object.fromEntries(
        agreements.map((agreement) => [agreement.name, checked])
      );
      setCheckboxStates(newStates);
    } else {
      setCheckboxStates({ ...checkboxStates, [name]: checked });
    }
  };
  const areEssentialAgreementsChecked = useCallback(
    () =>
      agreements
        .filter((agreement) => agreement.name === "require")
        .every((agreement) => checkboxStates[agreement.name]),
    [checkboxStates]
  );

  useEffect(() => {
    const isActive = areEssentialAgreementsChecked();
    setButtonActive(isActive);
  }, [areEssentialAgreementsChecked]);

  return (
    <>
      <CheckboxContainer>
        {agreements.map(({ name, label }) => (
          <li key={name}>
            <Checkbox
              key={name}
              name={name}
              checked={checkboxStates[name]}
              label={label}
              onChange={handleCheckboxChange}
            />
          </li>
        ))}
        <li>
          ※ 스나이퍼팩토리 이용약관, 개인정보 수집 및 이용에 모두 동의합니다.
        </li>
      </CheckboxContainer>
      <Button
        destination="/signup/info"
        color="black"
        disabled={!isButtonActive}
      >
        본인 인증
      </Button>
    </>
  );
};

export default TermsAgreement;
