"use client";
import React, { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormInputPost } from "@/types/FormInput";
import axios from "axios";
import { Tag } from "@prisma/client";
interface FormPostProps {
  isEditing?: boolean;
  initalValue?: FormInputPost;
  isLoadingsubmit?: boolean;
  submit: SubmitHandler<FormInputPost>;
}

const FormPost: FC<FormPostProps> = ({
  submit,
  isEditing,
  initalValue,
  isLoadingsubmit,
}: FormPostProps) => {
  console.log(initalValue);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputPost>({ defaultValues: initalValue });
  // fetch tags list
  const { data: dataTags, isLoading: isLoadingTags } = useQuery<Tag[]>({
    queryKey: ["tags"],
    queryFn: async () => {
      const response = await axios.get("/api/tags");
      return response.data;
    },
  });

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col items-center justify-center gap-5 mt-10"
    >
      <input
        {...register("title", { required: true })}
        type="text"
        placeholder="제목을 입력하세요"
        className="input input-bordered w-full max-w-lg"
      />
      <textarea
        {...register("content", { required: true })}
        className="textarea textarea-bordered resize-none w-full max-w-lg"
        placeholder="노트를 적어보세요"
      ></textarea>
      {isLoadingTags ? (
        <span className="loading loading-dots loading-md"></span>
      ) : (
        <select
          {...register("tagId", { required: true })}
          className="select select-bordered  w-full max-w-lg"
        >
          <option defaultValue="option1">Select tags</option>
          {dataTags?.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      )}

      <button type="submit" className="btn btn-primary w-full max-w-lg">
        {isLoadingsubmit && <span className="loading loa"></span>}
        {isEditing
          ? isLoadingsubmit
            ? "수정 중"
            : "수정하기"
          : isLoadingsubmit
          ? "추가 중"
          : "추가하기"}
      </button>
    </form>
  );
};

export default FormPost;
