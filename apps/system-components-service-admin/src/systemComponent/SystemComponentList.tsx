import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SystemComponentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SystemComponents"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="type" source="typeField" />
        <TextField label="title" source="title" />
        <TextField label="description" source="description" />
        <TextField label="characteristic" source="characteristic" />
        <TextField label="code" source="code" />
        <TextField label="version" source="version" />
        <TextField
          label="platformServiceKindId"
          source="platformServiceKindId"
        />
        <TextField
          label="platformServiceKindType"
          source="platformServiceKindType"
        />
        <TextField label="properties" source="properties" />
      </Datagrid>
    </List>
  );
};
