import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

interface TransactionProps {}

export default function Transaction({transaction}: any) {
  const { deleteTransaction }:any = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">
        x
      </button>
    </li>
  );
}
