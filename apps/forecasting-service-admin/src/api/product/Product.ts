import { ForecastLine } from "../forecastLine/ForecastLine";

export type Product = {
  createdAt: Date;
  description: string | null;
  forecastLines?: Array<ForecastLine>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
