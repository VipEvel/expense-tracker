import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import moment from "moment";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [selectedOption, setSelectedOption] = useState("credit");

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000) + amount,
      text,
      amount: amount,
      type: selectedOption,
      date: moment().format("DD MMMM, YYYY"),
    };

    addTransaction(newTransaction);
    setText("");
    setAmount(0);
    setSelectedOption("credit");
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <textarea
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Description"
          />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <div className="amount-section">
            <div className="form-control" style={{ width: "100%" }}>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value))}
                placeholder="Enter amount"
                min={0}
              />
            </div>
            <div className="form-control">
              <select
                value={selectedOption}
                style={{
                  width: "75px",
                  color: selectedOption === "credit" ? "green" : "red",
                }}
                onChange={handleSelectChange}
              >
                <option value="credit" style={{ color: "#000" }}>
                  Cr.
                </option>
                <option value="debit" style={{ color: "#000" }}>
                  Dr.
                </option>
              </select>
            </div>
          </div>
        </div>
        <button className="btn" disabled={amount <= 0}>
          Add transaction
        </button>
      </form>
    </>
  );
};
