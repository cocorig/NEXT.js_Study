import Tab from "./_component/tab/Tab";
import { TabProvider } from "./_component/TabProvider";
export default function Home() {
  return (
    <div>
      <TabProvider>
        <Tab />
      </TabProvider>
    </div>
  );
}
