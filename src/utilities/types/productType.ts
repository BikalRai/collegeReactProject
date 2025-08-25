export interface ProductTypes {
  id: string;
  name: string;
  price: number;
  discountPrice: number;
  image: string;
  badge: string;
  categories: string[];
}

export interface CreateProductPayload {
  [key: string]: string | string[] | File[] | boolean | number;
  name: string;
  price: string;
  discountPrice: string;
  images: File[];
  badge: string[];
  categories: string;
  onSale: boolean;
  rating: number;
  reviews: string[];
}

export interface UpdateProductPayload {
  productId: string | number;
  data: CreateProductPayload;
}

export interface DeleteProductPayload {
  productId: string | number;
}
