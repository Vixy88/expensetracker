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

  return (
    <div className="new-expense">
      <div>
        <button onClick={() => setVisible(true)}>Add New Expense</button>
        <button onClick={() => setVisible(false)}>Hide Form</button>
      </div>
      {visible && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
};

export default NewExpense;
