import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ForecastLineListRelationFilter } from "../forecastLine/ForecastLineListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  forecastLines?: ForecastLineListRelationFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
