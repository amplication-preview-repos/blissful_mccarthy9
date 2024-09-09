import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ForecastLineUpdateInput = {
  forecastingTime?: Date | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  user?: UserWhereUniqueInput | null;
};
