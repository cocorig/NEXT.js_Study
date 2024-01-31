"use client";
import React from "react";
import FormPost from "@/components/FormPost";
import BackButton from "@/components/BackButton";

import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormInputPost } from "@/types/FormInput";
import axios from "axios";
import { useRouter } from "next/navigation";
const CreatePage = () => {
  const router = useRouter();
  // fetch post create
  const { mutate: createPost } = useMutation({
    mutationFn: async (newPost: FormInputPost) => {
      const response = await axios.post("/api/posts/create", newPost);
      return response.data;
    },
    onError: (err) => {
      console.error(err);
    },
    onSuccess: () => {
      router.push("/");
    },
  });

  const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
    createPost(data);
    router.refresh();
  };

  return (
    <div>
      <BackButton />
      <h1 className="text-2xl my-4 font-bold text-center">Note 추가</h1>
      <FormPost submit={handleCreatePost} isEditing={false} />
    </div>
  );
};

export default CreatePage;

// my-1
// margin-top: 0.25rem; /* 4px */
// margin-bottom: 0.25rem; /* 4px */
// my-2
//margin-top: 0.5rem; /* 8px */
// margin-bottom: 0.5rem; /* 8px */
// my-3
// margin-top: 0.75rem; /* 12px */
// margin-bottom: 0.75rem; /* 12px */
// my-4
// 	margin-top: 1rem; /* 16px */
// margin-bottom: 1rem; /* 16px */
