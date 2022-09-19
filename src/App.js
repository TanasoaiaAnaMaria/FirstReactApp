import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expense = [
    {
      title: 'Car insurance',
      amount: 289.78,
      date: new Date(2021,0,28)
    },
    {
      title: 'Car ',
      amount: 28.78,
      date: new Date(2021,1,28)
    },
    {
      title: 'Car insurance',
      amount: 289.78,
      date: new Date(2021,2,28)
    },
    {
      title: 'Car insurance',
      amount: 289.78,
      date: new Date(2021,2,28)
    }
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem 
       title={expense[0].title}
       amount={expense[0].amount}
       date={expense[0].date}/>
       <ExpenseItem 
       title={expense[1].title}
       amount={expense[1].amount}
       date={expense[1].date}/>
    </div>
  );
}

export default App;
