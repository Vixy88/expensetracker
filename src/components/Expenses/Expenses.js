import Card from "../UI/Card";
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import "./Expenses.css";

const Expenses = ({ items }) => {
  const [year, setYear] = useState("");

  const filterByYear = () => {
    if (year === "2022") {
    }
  };

  return (
    <section>
      <Card className="expenses">
        <div>
          <ExpensesFilter onFilterByYear={filterByYear} />
        </div>
        {items.map((expense) => {
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
