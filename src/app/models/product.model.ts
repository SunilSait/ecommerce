export type Category = 'anime' | 'sports' | 'nature' | 'movies' | 'abstract' | 'music';

export interface Product {
  id: number;
  name: string;
  category: Category;
  price: number;
  description: string;
  imageUrl: string;
  rating: number;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
