import { ForecastLineCreateNestedManyWithoutProductsInput } from "./ForecastLineCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  description?: string | null;
  forecastLines?: ForecastLineCreateNestedManyWithoutProductsInput;
  name?: string | null;
};
