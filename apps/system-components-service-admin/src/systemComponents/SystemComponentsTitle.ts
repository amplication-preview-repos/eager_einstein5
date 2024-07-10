import { SystemComponents as TSystemComponents } from "../api/systemComponents/SystemComponents";

export const SYSTEMCOMPONENTS_TITLE_FIELD = "code";

export const SystemComponentsTitle = (record: TSystemComponents): string => {
  return record.code?.toString() || String(record.id);
};
