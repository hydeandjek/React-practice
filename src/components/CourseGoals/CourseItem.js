import React from 'react';
import './CourseItem.css';

export const CourseItem = ({ item, onDelete }) => {
  return (
    <li
      className='goal-item'
      onClick={() => onDelete(item.id)}
    >
      {item.text}
    </li>
  );
};

export default CourseItem;
