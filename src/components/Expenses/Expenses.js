import ExpenseList from "./ExpenseList";
import "./Expenses.css";

const Expenses = ({ items }) => {
  return (
    <section>
      <ExpenseList expenses={items} />
    </section>
  );
};

export default Expenses;
