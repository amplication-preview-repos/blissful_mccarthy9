import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ForecastLineListRelationFilter } from "../forecastLine/ForecastLineListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProductWhereInput = {
  description?: StringNullableFilter;
  forecastLines?: ForecastLineListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
