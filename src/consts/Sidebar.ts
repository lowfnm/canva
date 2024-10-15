import ApplicationIcon from "@/icons/ApplicationIcon";
import AppsIcon from "@/icons/AppsIcon";
import BadgeIcon from "@/icons/BadgeIcon";
import BrandIcon from "@/icons/BrandIcon";
import HeartIcon from "@/icons/HeartIcon";
import HomeIcon from "@/icons/HomeIcon";
import MockupIcon from "@/icons/MockupIcon";
import PhotoIcon from "@/icons/PhotoIcon";
import PlanIcon from "@/icons/PlanIcon";
import ProductPhotosIcon from "@/icons/ProductPhotosIcon";
import ProjectIcon from "@/icons/ProjectIcon";
import StarIcon from "@/icons/StarIcon";
import TemplateIcon from "@/icons/TemplateIcon";
import { RecursiveMenuItem } from "@/types/Sidebar";

const SIDEBAR_ICONS_OPTIONS = [
  { label: "Home", icon: HomeIcon, link: "/home" },
  { label: "Projects", icon: ProjectIcon, link: "/projects" },
  { label: "Templates", icon: TemplateIcon, link: "/templates" },
  { label: "Brand", icon: BrandIcon, link: "/brand" },
  { label: "Applications", icon: ApplicationIcon, link: "/applications" },
];

const TEMPLATE_OPTIONS: RecursiveMenuItem[] = [
  {
    label: "Templates",
    path: "/templates",
    children: [
      {
        label: "Business",
        path: "/templates/business",
        children: [
          { label: "Docs", path: "/templates/business/docs" },
          { label: "Dashboard", path: "/templates/business/dashboard" },
        ],
      },
      {
        label: "Education",
        path: "/templates/education",
        children: [
          {
            label: "Docs",
            path: "/templates/education/docs",
            children: [
              { label: "Math", path: "/templates/education/docs/math" },
              { label: "Physics", path: "/templates/education/docs/physics" },
            ],
          },
          {
            label: "Dashboard",
            path: "/templates/education/dashboard",
            children: [
              { label: "Board", path: "/templates/education/dashboard/board" },
              {
                label: "Statistic",
                path: "/templates/education/dashboard/statistic",
              },
            ],
          },
        ],
      },
      {
        label: "Video",
        path: "/templates/video",
        children: [
          { label: "Dashboard", path: "/templates/video/dashboard" },
          { label: "Docs", path: "/templates/video/docs" },
        ],
      },
    ],
  },
  {
    label: "Photos",
    path: "/templates/photos",
    icon: PhotoIcon,
  },
  {
    label: "Badges",
    path: "/templates/badges",
    icon: BadgeIcon,
  },
  {
    label: "Authors you liked",
    path: "/templates/authors",
    icon: HeartIcon,
  },
  {
    label: "Favorite content",
    path: "/templates/favorite",
    icon: StarIcon,
  },
];

export const BRAND_OPTIONS = [
  {
    label: "Branding Elements Sets",
    icon: PhotoIcon,
    path: "/brand/branding",
  },
  {
    label: "Brand Templates",
    icon: BadgeIcon,
    path: "/brand/brand-templates",
  },
];

export const APPLICATIONS_OPTIONS = [
  {
    label: "All Apps",
    icon: AppsIcon,
    path: "/apps",
  },
  {
    label: "Essential Workplace Attributes",
    path: "/workplace",
  },
  {
    label: "AI-Powered",
    path: "/ai",
  },
  {
    label: "Essentials for Design",
    path: "/design",
  },
  {
    categoryLabel: "For team",
  },
  {
    label: "Marketing",
    path: "/marketing",
  },
  {
    label: "Creative",
    path: "/creative",
  },
  {
    label: "HR",
    path: "/hr",
  },
  {
    label: "Sales",
    path: "/sales",
  },
  {
    categoryLabel: "Recomended",
  },
  {
    label: "Content Planner",
    icon: PlanIcon,
    path: "/content",
  },
  {
    label: "Product Photos",
    icon: ProductPhotosIcon,
    path: "/product-photos",
  },
  {
    label: "Mockups",
    icon: MockupIcon,
    path: "/mockups",
  },
];

export { SIDEBAR_ICONS_OPTIONS, TEMPLATE_OPTIONS };
