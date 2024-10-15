export enum ImageCategoryTitle {
  Photo = "Photo",
  Brands = "Brands",
}

export type ImageCategory = {
  title: ImageCategoryTitle;
  images: { src: string; description: string }[];
};
