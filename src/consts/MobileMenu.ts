import BrandIcon from "@/icons/BrandIcon";
import HomeIcon from "@/icons/HomeIcon";
import { APPLICATIONS_OPTIONS, BRAND_OPTIONS } from "./Sidebar";
import QuestionIcon from "@/icons/QuestionIcon";
import { TrashIcon } from "@radix-ui/react-icons";
import { MenuCategory } from "@/types/MobileMenu";
import ApplicationIcon from "@/icons/ApplicationIcon";

const MOBILE_OPTIONS = [
  { label: "Home", icon: HomeIcon, path: "/home" },
  {
    label: "Brand",
    icon: BrandIcon,
    options: BRAND_OPTIONS,
    category: MenuCategory.BRAND,
  },
  {
    label: "Applications",
    icon: ApplicationIcon,
    options: APPLICATIONS_OPTIONS,
    category: MenuCategory.APP,
  },
  { label: "Ask a question to Canva", icon: QuestionIcon, path: "/faq" },
  { label: "Trash", path: "/trash", icon: TrashIcon },
];

export { MOBILE_OPTIONS };
