import Card from "../UI/Card";
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import "./Expenses.css";

const Expenses = ({ items }) => {
  const [year, setYear] = useState("");
  let filteredExpenses = [...items];

  const yearChangeHandler = (event) => {
    setYear(event.target.value);
  };

  if (year) {
    filteredExpenses = items.filter(
      (expense) => expense.date.getFullYear() === Number(year)
    );
  }

  console.log(filteredExpenses);

  return (
    <section>
      <Card className="expenses">
        <div>
          <ExpensesFilter year={year} onYearChange={yearChangeHandler} />
        </div>
        {filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              description={expense.description}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </Card>
    </section>
  );
};

export default Expenses;
