import { ForecastLineUpdateManyWithoutProductsInput } from "./ForecastLineUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  description?: string | null;
  forecastLines?: ForecastLineUpdateManyWithoutProductsInput;
  name?: string | null;
};
