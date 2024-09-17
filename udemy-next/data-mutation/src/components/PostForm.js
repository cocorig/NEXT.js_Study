"use client";

import { useFormState } from "react-dom";

import FormSubmit from "@/components/FormSubmit";

// PostForm 컴포넌트가 createPost서버액션에 접근할 권한을 줘야함
// 간단한 방법으로 훅을 단순히 프로퍼티로 받아들인다. 서버액션을 프로퍼티를 통해 전달할 수 있기 때문이다. 프로퍼티를 클라이언트 컴포넌트 파일에서 정의할 수 없지만 서버 컴포넌트에서 클라이언트 컴포넌트에 전달할 수 있다.

const initialState = {
  errors: {},
};

export default function PostForm({ action }) {
  const [state, formAction] = useFormState(action, initialState);
  const { title, content, image } = state.errors;
  //  state.errors가 null이라서 에러, 객체로 변경

  return (
    <>
      <h1>Create a new post</h1>
      <form action={formAction}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        {title && <p className="error">{title}</p>}
        <p className="form-control">
          <label htmlFor="image">Image URL</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        {image && <p className="error">{image}</p>}
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" />
        </p>
        {content && <p className="error">{content}</p>}
        <p className="form-actions">
          <FormSubmit type="reset" text="Reset" />
          <FormSubmit text="Create Post" loadingText="Posting..." />
        </p>
      </form>
    </>
  );
}
