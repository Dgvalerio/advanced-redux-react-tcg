export interface ICartItem {
  title: string;
  quantity: number;
  total: number;
  price: number;
  description: string;
}

export interface IItem {
  title: string;
  description: string;
  price: number;
}

export interface INotification {
  status: string;
  title: string;
  message: string;
}
