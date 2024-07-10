import { SortOrder } from "../../util/SortOrder";

export type SystemComponentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  typeField?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  characteristic?: SortOrder;
  code?: SortOrder;
  version?: SortOrder;
  platformServiceKindId?: SortOrder;
  platformServiceKindType?: SortOrder;
  properties?: SortOrder;
};
