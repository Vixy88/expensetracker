import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import "./ExpenseList.css";

const ExpenseList = (expenses) => {
  const [year, setYear] = useState("");
  let filteredExpenses = [...expenses.expenses];
  console.log(filteredExpenses);

  const yearChangeHandler = (event) => {
    setYear(event.target.value);
  };

  if (year) {
    filteredExpenses = expenses.expenses.filter(
      (expense) => expense.date.getFullYear() === Number(year)
    );
  }
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

export default ExpenseList;
