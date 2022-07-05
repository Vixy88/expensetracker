const ExpenseDate = (props) => {
  const month = props.date.toLocaleDateString("en-GB", { month: "long" });
  const day = props.date.toLocaleDateString("en-GB", { day: "numeric" });
  const year = props.date.getFullYear();

  return (
    <div>
      <div>
        {day} {month} {year}
      </div>
    </div>
  );
};

export default ExpenseDate;
