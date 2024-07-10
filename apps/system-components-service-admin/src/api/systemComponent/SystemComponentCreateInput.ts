import { InputJsonValue } from "../../types";

export type SystemComponentCreateInput = {
  typeField?: string | null;
  title?: string | null;
  description?: string | null;
  characteristic?: string | null;
  code?: string | null;
  version?: string | null;
  platformServiceKindId?: string | null;
  platformServiceKindType?: string | null;
  properties?: InputJsonValue;
};
