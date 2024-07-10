import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SystemComponentsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="code" source="code" />
      </SimpleForm>
    </Edit>
  );
};
