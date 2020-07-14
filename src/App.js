import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { InEx } from "./components/InEx";
import { TransList } from "./components/TransList";
import { AddTrans } from "./components/AddTrans";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <InEx />
        <TransList />
        <AddTrans />
      </div>
    </GlobalProvider>
  );
}

export default App;
