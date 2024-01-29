import React from "react";
import ButtonAction from "@/components/ButtonAction";
import BackButton from "@/components/backButton";
const BlogDetailPage = () => {
  return (
    <div>
      <BackButton />
      <div className="mb-8">
        <h2 className="text-2xl font-bold my-4">Note One</h2>
      </div>
      <p className="text-slate-700 mb-8">content</p>
      <ButtonAction />
    </div>
  );
};

export default BlogDetailPage;
