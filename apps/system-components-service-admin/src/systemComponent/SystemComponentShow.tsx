import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const SystemComponentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
