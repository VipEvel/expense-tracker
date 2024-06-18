import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import moment from "moment";

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    "₹ " +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.type === "debit" ? "-" : "+";

  return (
    <li className={transaction.type === "debit" ? "minus" : "plus"}>
      <span className="flex-col">
        <span>{transaction.text}</span>
        {!!transaction?.date && (
          <span className="light-text">
            {moment(transaction?.date).format("DD MMMM, YYYY")} |{" "}
            {moment(transaction?.date).format("LT")}
          </span>
        )}
      </span>
      <span>
        {sign}
        {moneyFormatter(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
