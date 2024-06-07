import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <div style={{ textAlign: "center" }}>
        <Header />
      </div>
      <div className="main-wrapper">
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <AddTransaction />
        </div>
        <div className="list-container">
          <TransactionList />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
