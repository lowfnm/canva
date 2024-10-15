import React from "react";
import { TAB_CATEGORIES } from "@/consts/Tabs";
import TabComponent from "../components/TabComponent";

const page = () => {
  return <TabComponent tabCategories={TAB_CATEGORIES} />;
};

export default page;
