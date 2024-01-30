"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormInputPost } from "@/types/FormInput";
import axios from "axios";
import { Tag } from "@prisma/client";

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

  // fetch !! tags list
  const { data: dataTags, isLoading: isLoadingTags } = useQuery<Tag[]>({
    queryKey: ["tags"],
    queryFn: async () => {
      const response = await axios.get("/api/tags");
      return response.data;
    },
  });
  console.log(dataTags);
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
      {isLoadingTags ? (
        <span className="loading loading-dots loading-md"></span>
      ) : (
        <select
          {...(register("tag"), { required: true })}
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
        {isEditing ? "수정하기" : "추가하기"}
      </button>
    </form>
  );
};

export default FormPost;
