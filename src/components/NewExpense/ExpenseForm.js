import React from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  let title;
  const titleChangeHandler = (e) => {
    title = e.target.value;
  };

  const priceChangeHandler = (e) => {
    console.log(title);
  };
  const dateChangeHandler = (e) => {};

  const formSubmitHandler = (e) => {
    e.preventDefault(); //submit 차단
    console.log('submit 버튼을 누름!');
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Price</label>
          <input
            type='number'
            min='100'
            step='100'
            onChange={priceChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2025-12-31'
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
