"use client";
import React from "react";
import FormPost from "@/components/FormPost";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import axios from "axios";
import { FC } from "react";
import { ParamsProps } from "@/types/Post";
import { FormInputPost } from "@/types/FormInput";
const EditPage: FC<ParamsProps> = ({ params }) => {
  const { id } = params;
  // get post values
  const { data: dataPost, isLoading: isLoadingPost } = useQuery({
    queryKey: ["posts", id],
    queryFn: async () => {
      const response = await axios.get(`/api/posts/${id}`);
      return response.data;
    },
  });

  // fetch post updates
  const { mutate: updatePost, isPending } = useMutation({
    mutationFn: async (newPost: FormInputPost) => {
      return axios.patch(`/api/posts/${id}`, newPost);
    },
    onError: (err) => {
      console.error(err);
    },
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
  });

  const router = useRouter();
  const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
    updatePost(data);
  };
  if (isLoadingPost) {
    return (
      <div className="text-center">
        <span className="loading loading-spinner loading-md"></span>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-2xl my-4 font-bold text-center">Note 수정</h1>
      <FormPost
        isEditing
        initalValue={dataPost}
        submit={handleEditPost}
        isLoadingsubmit={isPending}
      />
    </div>
  );
};

export default EditPage;
