import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.year} onChange={props.onYearChange}>
          <option value="">Year</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
      <div className="expenses-filer__barchart">
        <div className="center">
          <div className="expenses-filer__bar"></div>
          <label>Jan</label>
        </div>
        <div className="center">
          <div className="expenses-filer__bar"></div>
          <label>Feb</label>
        </div>
        <div className="center">
          <div className="expenses-filer__bar"></div>
          <label>Mar</label>
        </div>
        <div className="center">
          <div className="expenses-filer__bar"></div>
          <label>Apr</label>
        </div>
        <div className="center">
          <div className="expenses-filer__bar"></div>
          <label>May</label>
        </div>
        <div className="center">
          <div className="expenses-filer__bar"></div>
          <label>Jun</label>
        </div>
        <div className="center">
          <div className="expenses-filer__bar"></div>
          <label>July</label>
        </div>
        <div className="center">
          <div className="expenses-filer__bar"></div>
          <label>Aug</label>
        </div>
        <div className="center">
          <div className="expenses-filer__bar"></div>
          <label>Sep</label>
        </div>
        <div className="center">
          <div className="expenses-filer__bar"></div>
          <label>Oct</label>
        </div>
        <div className="center">
          <div className="expenses-filer__bar"></div>
          <label>Nov</label>
        </div>
        <div className="center">
          <div className="expenses-filer__bar"></div>
          <label>Dec</label>
        </div>
      </div>
    </div>
  );
};

export default ExpensesFilter;
