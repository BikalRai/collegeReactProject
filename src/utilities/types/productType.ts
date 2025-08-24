export interface ProductTypes {
  id: number;
  name: string;
  price: number;
  discountPrice: number;
  image: string;
  badge: string;
  categories: string[];
}

export interface CreateProductPayload {
  name: string;
  price: string;
  discountPrice: string;
  image: string[];
  badge: string[];
  categories: string[];
  onSale: boolean;
  rating: number;
  reviews: string[];
}
