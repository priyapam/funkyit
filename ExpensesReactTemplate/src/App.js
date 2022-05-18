import React, {useState} from 'react';
import Expenses from './components/Expenses';

import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Trademill',
    amount: 941200,
    date: new Date(2022, 7, 14),
  },
  { id: 'e2', title: 'Ropes', amount: 872, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Strings',
    amount: 270,
    date: new Date(2021, 3, 8),
  },
  {
    id: 'e4',
    title: 'Dumbble',
    amount: 4500,
    date: new Date(2021, 8, 12),
  },
];


function App() {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;