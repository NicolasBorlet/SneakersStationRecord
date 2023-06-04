export interface HeaderLinksProps {
  links: string;
  title: string;
  src?: string;
  isVisible?: boolean;
}

export enum ProductType {
  Shoes = "shoes",
  Vinyl = "vinyl",
}

export interface Product {
  ProductID: number;
  ProductName: string;
  ProductCartDesc: string;
  ProductLongDesc: string;
  ProductShortDesc: string;
  ProductUpdateTime: string;
  ProductStock: number;
  CategorieID: number;
  type: ProductType;
  BrandID: number;
  ProductThumb: string;
}
