import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SystemComponentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="type" source="typeField" />
        <TextInput label="title" source="title" />
        <TextInput label="description" source="description" />
        <TextInput label="characteristic" source="characteristic" />
        <TextInput label="code" source="code" />
        <TextInput label="version" source="version" />
        <TextInput
          label="platformServiceKindId"
          source="platformServiceKindId"
        />
        <TextInput
          label="platformServiceKindType"
          source="platformServiceKindType"
        />
        <div />
      </SimpleForm>
    </Edit>
  );
};
