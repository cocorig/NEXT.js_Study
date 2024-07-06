"use client";

import { ReactNode, createContext, useState, useContext } from "react";
interface TabProviderProps {
  children: ReactNode;
}
interface TabContextProps {
  tab: string;
  setTab: (tab: "rec" | "fol") => void;
}

const TabContext = createContext<TabContextProps | undefined>(undefined);

export function TabProvider({ children }: TabProviderProps) {
  const [tab, setTab] = useState("rec");
  const value = { tab, setTab };

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
}

export function useTabContext() {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTabContext must be used within a TabProvider");
  }
  return context;
}
