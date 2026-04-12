export enum OrderStatus {
  OPEN = "open",
  COMPLETED = "completed"
}

export interface Order {
  id: string;
  amount: number;
  status: OrderStatus;
}