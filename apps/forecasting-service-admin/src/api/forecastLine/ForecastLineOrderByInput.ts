import { SortOrder } from "../../util/SortOrder";

export type ForecastLineOrderByInput = {
  createdAt?: SortOrder;
  forecastingTime?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
