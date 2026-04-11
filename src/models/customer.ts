export interface Customer {
  id: string;
  fullName: string;
  active: boolean;
}

export enum Status {
  ACTIVE = "active",
  INACTIVE = "inactive"
}