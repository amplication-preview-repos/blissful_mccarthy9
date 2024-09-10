import { ForecastLine as TForecastLine } from "../api/forecastLine/ForecastLine";

export const FORECASTLINE_TITLE_FIELD = "id";

export const ForecastLineTitle = (record: TForecastLine): string => {
  return record.id?.toString() || String(record.id);
};
