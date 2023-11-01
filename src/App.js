import React from 'react';
import './App.css';
import Expenses from './components/Expneses/Expenses';

import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  // 지출 항목 객체 배열

  const expenses = [
    {
      title: '바나나',
      price: '2000',
      date: new Date(2023, 3 - 1, 23),
    },
    {
      title: 'BBQ 치킨',
      price: '20000',
      date: new Date(2023, 3 - 1, 23),
    },
    {
      title: '도미노피자',
      price: '35000',
      date: new Date(2023, 7 - 1, 23),
    },
  ];

  console.log('App 실행!');

  return (
    <>
      <NewExpense />
      <Expenses items={expenses} />
    </>
  );
};

export default App;
