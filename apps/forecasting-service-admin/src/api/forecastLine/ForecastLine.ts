import { Product } from "../product/Product";

export type ForecastLine = {
  createdAt: Date;
  forecastingTime: Date | null;
  id: string;
  product?: Product | null;
  quantity: number | null;
  updatedAt: Date;
};
