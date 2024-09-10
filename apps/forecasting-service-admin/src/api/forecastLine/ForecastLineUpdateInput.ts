import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ForecastLineUpdateInput = {
  forecastingTime?: Date | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
};
