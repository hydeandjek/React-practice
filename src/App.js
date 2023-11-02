import React, { useState } from 'react';
import './App.css';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  // 지출 항목 객체 배열

  const expenses = [
    {
      id: 2,
      title: '바나나',
      price: '2000',
      date: new Date(2023, 3 - 1, 23),
    },
    {
      id: 3,
      title: 'BBQ 치킨',
      price: '20000',
      date: new Date(2022, 5 - 1, 23),
    },
    {
      id: 4,
      title: '도미노피자',
      price: '35000',
      date: new Date(2023, 7 - 1, 23),
    },
    {
      id: 5,
      title: '엽기떡볶기',
      price: '17000',
      date: new Date(2021, 3 - 1, 18),
    },
  ];

  // 지출 객체배열을 상태변수로 관리
  const [expenseList, setExpenseList] = useState(expenses);

  // ExpenseForm에게 내려보낼 함수
  const addExpenseHandler = (newExpense) => {
    console.log('App 컴포넌트에서 응답함!');

    const modifyExpense = {
      ...newExpense,
      id: expenseList[expenseList.length - 1].id + 1,
    };
    console.log(modifyExpense);

    setExpenseList([...expenseList, modifyExpense]);
    console.log(expenseList);
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenseList} />
    </>
  );
};

export default App;
