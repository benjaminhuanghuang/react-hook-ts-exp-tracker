import React from "react";
import "./App.css";
//
import Header from "./componts/Header";
import Balance from "./componts/Balance";
import IncomeExpenses from "./componts/IncomeExpenses";
import TransactionList from "./componts/TransactionList";
import AddTransaction from "./componts/AddTransaction";
//
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="containe">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
