import TabComponent from "@/app/components/TabComponent";
import { TAB_CATEGORIES } from "@/consts/Tabs";
import React from "react";

const page = () => {
  return <TabComponent tabCategories={TAB_CATEGORIES} />;
};

export default page;
