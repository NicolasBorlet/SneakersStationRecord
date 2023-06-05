export interface ItemProduct {
  ProductID: number;
  ProductName: string;
  ProductCartDesc: string;
  ProductLongDesc: string;
  ProductShortDesc: string;
  ProductThumb: string;
  ProductStock: number;
  CategorieID: number;
  BrandID: number;
  type: string;
}

export enum Type {
  shoes = "shoes",
  vinyl = "vinyl",
}

export interface SneakersContainerLayoutProps {
  imgSrc: string;
  title: string;
  filter?: string;
  productType: Type;
  link: string;
}
