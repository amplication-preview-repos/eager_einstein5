import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SystemComponentsList } from "./systemComponents/SystemComponentsList";
import { SystemComponentsCreate } from "./systemComponents/SystemComponentsCreate";
import { SystemComponentsEdit } from "./systemComponents/SystemComponentsEdit";
import { SystemComponentsShow } from "./systemComponents/SystemComponentsShow";
import { SystemComponentList } from "./systemComponent/SystemComponentList";
import { SystemComponentCreate } from "./systemComponent/SystemComponentCreate";
import { SystemComponentEdit } from "./systemComponent/SystemComponentEdit";
import { SystemComponentShow } from "./systemComponent/SystemComponentShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"SystemComponentsService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="SystemComponents"
          list={SystemComponentsList}
          edit={SystemComponentsEdit}
          create={SystemComponentsCreate}
          show={SystemComponentsShow}
        />
        <Resource
          name="SystemComponent"
          list={SystemComponentList}
          edit={SystemComponentEdit}
          create={SystemComponentCreate}
          show={SystemComponentShow}
        />
      </Admin>
    </div>
  );
};

export default App;
