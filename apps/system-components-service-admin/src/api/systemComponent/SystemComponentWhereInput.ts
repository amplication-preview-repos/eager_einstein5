import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type SystemComponentWhereInput = {
  id?: StringFilter;
  typeField?: StringNullableFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  characteristic?: StringNullableFilter;
  code?: StringNullableFilter;
  version?: StringNullableFilter;
  platformServiceKindId?: StringNullableFilter;
  platformServiceKindType?: StringNullableFilter;
  properties?: JsonFilter;
};
