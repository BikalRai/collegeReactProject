export interface ProductTypes {
  id?: string;
  name: string;
  price: string;
  discountPrice: string;
  images: string[];
  badge: number[];
  categories: string;
  description: string;
  quantity: number;
  rating: number;
  onSale: boolean;
  reviews: string[];
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

export interface Badge {
  id: number;
  name: string;
}
