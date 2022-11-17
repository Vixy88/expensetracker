import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [visible, setVisible] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: "e" + Math.floor((Math.random() * 10000 + 1).toString()),
    };
    props.onAddExpense(expenseData);
  };

  const handleClick = () => setVisible(!visible);

  return (
    <div className="new-expense">
      {visible ? (
        <div>
          <button onClick={handleClick}>Hide Form</button>{" "}
          <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
      ) : (
        <div>
          <button onClick={handleClick}>Add New Expense</button>
        </div>
      )}
    </div>
  );
};

export default NewExpense;
