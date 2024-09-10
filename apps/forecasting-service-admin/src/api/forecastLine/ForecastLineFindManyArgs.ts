import { ForecastLineWhereInput } from "./ForecastLineWhereInput";
import { ForecastLineOrderByInput } from "./ForecastLineOrderByInput";

export type ForecastLineFindManyArgs = {
  where?: ForecastLineWhereInput;
  orderBy?: Array<ForecastLineOrderByInput>;
  skip?: number;
  take?: number;
};
