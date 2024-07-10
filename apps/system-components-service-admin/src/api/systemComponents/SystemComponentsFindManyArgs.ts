import { SystemComponentsWhereInput } from "./SystemComponentsWhereInput";
import { SystemComponentsOrderByInput } from "./SystemComponentsOrderByInput";

export type SystemComponentsFindManyArgs = {
  where?: SystemComponentsWhereInput;
  orderBy?: Array<SystemComponentsOrderByInput>;
  skip?: number;
  take?: number;
};
