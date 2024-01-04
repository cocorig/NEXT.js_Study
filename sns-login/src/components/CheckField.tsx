import styled from "styled-components";

type CheckFieldProps = {
  title: string;
  name: string;
  id: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  height?: string;
};

type CheckFieldStyle = {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  height?: string;
};
export default function RadioField({
  title,
  name,
  id,
  color,
  fontSize,
  fontWeight,
  height,
}: CheckFieldProps) {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
  };

  return (
    <RadioContainer>
      <Label
        htmlFor={id}
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
        height={height}
      >
        <input
          type="checkbox"
          name={name}
          id={id}
          onChange={handleCheckboxChange}
        />
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" fill="#CCCCCC" />
            <circle cx="12" cy="12" r="3" fill="white" />
          </svg>
        </div>
        <span>{title}</span>
      </Label>
    </RadioContainer>
  );
}

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label<CheckFieldStyle>`
  cursor: pointer;
  color: ${({ color }) => color || "black"};

  font-weight: ${({ fontWeight }) => fontWeight || "500"};
  display: flex;
  align-items: center;
  div {
    margin-right: 8px;
    svg {
      vertical-align: middle;
    }
  }
  span {
    height: ${({ height }) => height || "16px"};
  }
  input {
    overflow: hidden;
    position: absolute;
    clip: rect(0px, 0px, 0px, 0px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
  }

  input:checked + div svg circle:nth-of-type(1) {
    fill: #4c8bff;
  }
`;
