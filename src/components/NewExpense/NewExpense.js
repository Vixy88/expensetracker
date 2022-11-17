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
        <div className="animate">
          <div className="flex-row-reverse">
            <button onClick={handleClick} className="btn-hide">
              Hide Form
            </button>
          </div>
          <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
      ) : (
        <div>
          <button onClick={handleClick} className="btn-show">
            Add New Expense
          </button>
        </div>
      )}
    </div>
  );
};

export default NewExpense;
