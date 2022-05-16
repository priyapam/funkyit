import Expenses from './components/Expenses';

function App() {
  const expenses = [
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

  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;