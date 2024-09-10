import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ForecastLineCreateInput = {
  forecastingTime?: Date | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
};
