import React from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API, Storage } from "aws-amplify";
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";


import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import Materials from "./Pages/Materials";
import NewMaterial from "./Pages/NewMaterial";
import MyMaterials from "./Pages/MyMaterials";

const App = ({ signOut }) => {


  return (
    <View className="App">
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="register" element={<Register />} />
        {/* Private Routes */}
        <Route>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path={`${1}/your-materials`} element={<MyMaterials />} />
          <Route path="newmaterial" element={<NewMaterial />} />
          <Route path="materials" element={<Materials />} />
        </Route>
      </Route>
    </Routes>
      <Button onClick={signOut}>Sign Out</Button>

      <a href="/register">Create New User</a> |{" "}
      <button className="Button">Let's Go!</button>
    </View>
  );
};

//replace - App - export with - withAuthenticator(App) - to use auth
export default  withAuthenticator(App);