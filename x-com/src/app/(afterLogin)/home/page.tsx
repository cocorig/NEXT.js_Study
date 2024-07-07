import Tab from "./_component/tab/Tab";
import { TabProvider } from "./_component/TabProvider";
import PostForm from "./_component/post/PostForm";
import Post from "../_component/post/Post";
import style from "./home.module.css";
export default function Home() {
  return (
    <div className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
      </TabProvider>
    </div>
  );
}
