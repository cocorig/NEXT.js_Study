import React, { ReactNode } from "react";
import style from "@/app/create/create.module.css";
interface CreateLayoutProps {
  children: ReactNode;
}

const CreateLayout: React.FC<CreateLayoutProps> = (props) => {
  return (
    <form className={style.createForm}>
      <h2>생성</h2>
      {props.children}
    </form>
  );
};

export default CreateLayout;

// FC는 TypeScript에서 React 함수 컴포넌트의 타입을 정의하는 데 사용되는 단축어, Functional Component의 약자로, React.FC는 함수 컴포넌트의 타입을 정의하는 데 사용, 함수 컴포넌트의 프로퍼티(props)를 정의할 수 있다.
// {props.children}은 해당폴더의 page.tsx
