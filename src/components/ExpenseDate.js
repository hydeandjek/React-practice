import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = () => {
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{2023}</div>
      <div className='expense-date__year'>{3}</div>
      <div className='expense-date__day'>{26}</div>
    </div>
  );
};

export default ExpenseDate;
