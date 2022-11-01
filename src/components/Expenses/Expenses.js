import Card from "../UI/Card";
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import "./Expenses.css";

const Expenses = ({ items }) => {
  let filteredExpenses = [];

  const filterByYear = (year) => {
    filteredExpenses = items.filter(
      (expense) => expense.date.getFullYear() === Number(year)
    );
  };

  console.log(filteredExpenses);

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
