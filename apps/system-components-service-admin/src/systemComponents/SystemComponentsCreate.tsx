import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SystemComponentsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="code" source="code" />
      </SimpleForm>
    </Create>
  );
};
