import React from "react";
import TabComponent from "../../components/TabComponent";
import { TAB_CATEGORIES } from "@/consts/Tabs";

const page = () => {
  return <TabComponent tabCategories={TAB_CATEGORIES} />;
};

export default page;
