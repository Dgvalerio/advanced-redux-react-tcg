import { ICartState } from '../store/cart';

export interface ICartItem {
  title: string;
  quantity: number;
  total: number;
  price: number;
}

export interface IStore {
  cart: ICartState;
}
