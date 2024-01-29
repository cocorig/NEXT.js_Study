import React from "react";
import FormPost from "@/components/FormPost";

const EditPage = () => {
  return (
    <div>
      <h1 className="text-2xl my-4 font-bold text-center">Note 수정</h1>
      <FormPost isEditing />
    </div>
  );
};

export default EditPage;
