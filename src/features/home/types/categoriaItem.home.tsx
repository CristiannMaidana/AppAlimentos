import { ComponentProps } from "react";
import CategoryCard from "../components/category-card";

// Create type for handle the value of the icons
export type CategoryItem = {
  id: string;
  title: string;
  icon: ComponentProps<typeof CategoryCard>['icon'];
  backgroundColor: string;
};