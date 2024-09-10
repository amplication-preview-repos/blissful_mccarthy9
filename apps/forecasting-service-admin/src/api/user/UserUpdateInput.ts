import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  forecastLines?: Date;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
