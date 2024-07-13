"use client";

import FollowingPosts from "../../_component/post/FollowingPosts";
import PostRecommends from "./post/PostRecommends";
import { useTabContext } from "./TabProvider";

export default function TabDecider() {
  const { tab } = useTabContext();
  if (tab === "fol") {
    return <FollowingPosts />;
  } else {
    return <PostRecommends />;
  }
}
