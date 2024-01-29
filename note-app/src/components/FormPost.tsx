"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormInputPost } from "@/types/FormInput";

interface FormPostProps {
  isEditing?: boolean;
}

const FormPost = ({ isEditing }: FormPostProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputPost>();

  const onSubmit: SubmitHandler<FormInputPost> = (data) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center gap-5 mt-10"
    >
      <input
        {...(register("title"), { required: true })}
        type="text"
        placeholder="제목을 입력하세요"
        className="input input-bordered w-full max-w-lg"
      />
      <textarea
        {...(register("content"), { required: true })}
        className="textarea textarea-bordered resize-none w-full max-w-lg"
        placeholder="노트를 적어보세요"
      ></textarea>
      <select
        {...(register("tag"), { required: true })}
        className="select select-bordered  w-full max-w-lg"
      >
        <option defaultValue="option1">Select tags</option>
        <option>JavaScript</option>
        <option>TypeScript</option>
      </select>
      <button type="submit" className="btn btn-primary w-full max-w-lg">
        {isEditing ? "수정하기" : "추가하기"}
      </button>
    </form>
  );
};

export default FormPost;
