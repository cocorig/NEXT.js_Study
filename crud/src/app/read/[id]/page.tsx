import React from "react";

interface ReadProps {
  params: {
    id: string;
  };
}

const Read: React.FC<ReadProps> = (props) => {
  return (
    <>
      <h2 className="a11y-hidden">읽기</h2>
      <p>parameters: {props.params.id}</p>
    </>
  );
};

export default Read;
