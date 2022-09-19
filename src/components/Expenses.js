import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

function Expenses(abc) {
  return (
    <div className="expenses">
      <ExpenseItem title={abc.items[0].title} amount={abc.items[0].amount} date={abc.items[0].date} />
      <ExpenseItem title={abc.items[1].title} amount={abc.items[1].amount} date={abc.items[1].date} />
      <ExpenseItem title={abc.items[2].title} amount={abc.items[2].amount} date={abc.items[2].date} />
      <ExpenseItem title={abc.items[3].title} amount={abc.items[3].amount} date={abc.items[3].date} />
    </div>
  );
}
export default Expenses;
