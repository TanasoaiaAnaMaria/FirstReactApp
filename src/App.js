import Expenses from "./components/Expenses";

function App() {

  const expense = [
    {
      title: 'Car insurance',
      amount: 289.78,
      date: new Date(2020,0,28)
    },
    {
      title: 'Car ',
      amount: 28.78,
      date: new Date(2021,1,28)
    },
    {
      title: 'ex',
      amount: 89.78,
      date: new Date(2022,2,8)
    },
    {
      title: 'ex2',
      amount: 9.78,
      date: new Date(2021,2,2)
    }
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
       <Expenses items={expense}/>
    </div>
  );
}

export default App;
