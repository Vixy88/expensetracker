import Card from "../UI/Card";
import React from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import "./Expenses.css";

const Expenses = ({ items }) => {
  return (
    <section>
      <Card className="expenses">
        <div>
          <ExpensesFilter data={items} />
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
