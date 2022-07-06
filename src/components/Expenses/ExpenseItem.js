import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(true);

  const clickHandler = () => {
    if (title === false) {
      setTitle(true);
    } else {
      setTitle(false);
    }
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title ? props.title : props.description}</h2>
        <div>
          <button onClick={clickHandler} className="expense-item__btn-toggle">
            {title ? "＋ Show Description " : "＋ Show Title"}
          </button>
        </div>
        <p className="expense-item__price">£{props.amount}</p>
      </div>
    </Card>
  );
};

export default ExpenseItem;
