import { Product } from "../product/Product";
import { User } from "../user/User";

export type ForecastLine = {
  createdAt: Date;
  forecastingTime: Date | null;
  id: string;
  product?: Product | null;
  quantity: number | null;
  updatedAt: Date;
  user?: User | null;
};
