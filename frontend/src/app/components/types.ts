export interface Category {
  id: string;
  name: string;
  parentCategoryId?: string;
  subcategories?: Category[];
  imageUrl: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  stockQuantity: number;
  categoryId: string;
  imageUrls: string[];
  category: string;
  rating?: number; // Average rating (0 to 5)
}
