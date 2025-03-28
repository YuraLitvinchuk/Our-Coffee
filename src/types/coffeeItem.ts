export interface ICoffeeItem {
  id?: number | string;
  name: string;
  country?: string;
  price: number;
  img: string;
  description?: string;
  best?: boolean;
}
