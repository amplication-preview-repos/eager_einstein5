import { JsonValue } from "type-fest";

export type SystemComponent = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  typeField: string | null;
  title: string | null;
  description: string | null;
  characteristic: string | null;
  code: string | null;
  version: string | null;
  platformServiceKindId: string | null;
  platformServiceKindType: string | null;
  properties: JsonValue;
};
