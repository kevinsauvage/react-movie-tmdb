import "./App.scss";
import Header from "./containers/Header";
import React from "react";
import { AppProvider } from "./Context/AppContext";

function App() {
  return (
    <AppProvider>
      <Header />
    </AppProvider>
  );
}

export default App;
