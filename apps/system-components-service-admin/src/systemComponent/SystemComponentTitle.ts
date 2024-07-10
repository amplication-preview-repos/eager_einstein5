import { SystemComponent as TSystemComponent } from "../api/systemComponent/SystemComponent";

export const SYSTEMCOMPONENT_TITLE_FIELD = "title";

export const SystemComponentTitle = (record: TSystemComponent): string => {
  return record.title?.toString() || String(record.id);
};
