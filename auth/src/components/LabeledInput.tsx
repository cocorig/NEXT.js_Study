import styled from "styled-components";
import Button from "./Button";
interface LabeledInputProps {
  label: string;
  htmlFor: string;

  successMessage?: string;
  failedMessage?: string;
  Message?: string;
  required?: boolean;
  children: React.ReactNode;
  showButton?: boolean;
  buttonText?: string;
  destination?: string;
}

const InputWrapper = styled.div`
  display: flex;
  padding-bottom: 26px;
  display: inline-flex;
  width: 100%;
`;

const LabelContainer = styled.div`
  width: 125px;
  padding-top: 12px;

  label {
    font-weight: 500;
    color: rgb(51, 51, 51);
    line-height: 20px;
  }
`;

const RequiredIndicator = styled.span`
  margin-left: 4px;
`;
const MessageColor = styled.div<{ color?: string }>`
  margin-top: 10px;
  p {
    font-size: 16px;
    color: ${(props) => props.color};
  }
`;

const ButtonWraper = styled.div`
  width: 120px;
  margin-left: 12px;
`;
const Inputbox = styled.div`
  flex: 1 1 0%;
`;
const LabeledInput = ({
  label,
  htmlFor,
  successMessage,
  failedMessage,
  Message,
  children,
  required = false,
  showButton = false,
  buttonText = "",
  destination = "",
}: LabeledInputProps) => {
  const getMessageColor = () => {
    if (failedMessage) return "red";
    if (successMessage) return "green";
    return "gray";
  };
  return (
    <InputWrapper>
      <LabelContainer>
        <label htmlFor={htmlFor}>
          {label}
          {required && <RequiredIndicator>*</RequiredIndicator>}
        </label>
      </LabelContainer>
      <Inputbox>
        {children}
        {(failedMessage || successMessage || Message) && (
          <MessageColor color={getMessageColor()}>
            <p>{failedMessage || successMessage || Message}</p>
          </MessageColor>
        )}
      </Inputbox>
      {showButton && (
        <ButtonWraper>
          <Button
            padding="none"
            destination={destination}
            color="#0059FF"
            width="120px"
            height="40px"
            borderColor="#0059FF"
            border-radius="4px"
          >
            {buttonText}
          </Button>
        </ButtonWraper>
      )}
    </InputWrapper>
  );
};

export default LabeledInput;
