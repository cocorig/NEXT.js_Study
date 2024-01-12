"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
type Props = {};

type Inputs = {
  title: string;
  content: string;
  tag: string;
};
const FormPost = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center gap-5 mt-10"
    >
      <input
        {...register("title")}
        type="text"
        placeholder="제목을 입력하세요"
        className="input input-bordered w-full max-w-lg"
      />
      <textarea
        {...register("content")}
        className="textarea textarea-bordered  w-full max-w-lg"
        placeholder="노트를 적어보세요"
      ></textarea>
      <select
        {...register("tag")}
        className="select select-bordered  w-full max-w-lg"
      >
        <option disabled selected>
          Select tags
        </option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>
      <button className="btn btn-primary w-full max-w-lg ">추가하기</button>
    </form>
  );
};

export default FormPost;
