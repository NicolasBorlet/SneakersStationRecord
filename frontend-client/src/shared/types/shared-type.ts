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

export interface Shoessize {
  ProductID: number;
  ShoesSize: number;
  ShoesSizePrice: number;
  ShoesSizeQuantity: number;
  DiscountID: number;
  ShoesSizeID: number;
}

export interface Vinyl {
  VinylArtist: string;
  VinylID: number;
  VinylDuration: string;
  VinylPrice: number;
  VinylQuantity: number;
  VinylLabel: string;
  ProductID: number;
}

export interface ItemListingProps {
  product: Product;
  shoes?: Shoessize[];
  vinyls?: Vinyl[];
}

export interface BrandProps {
  BrandID: number;
  BrandName: string;
  BrandDesc: string;
}
