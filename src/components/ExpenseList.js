import React from 'react'
import Item from './ExpenseItem'
import {MdDelete} from 'react-icons/md'
import { clear } from '@testing-library/user-event/dist/clear';

const ExpenseList = ({expenses,handleDelete,handleEdit,clearItems}) => {
  return (
    <>
      <ul className='list'>
        {expenses.map((expense)=>{
          return <Item key={expense.id} expense={expense} handleDelete={handleDelete} handleEdit={handleEdit} />;
        })}
      </ul>
      {expenses.length > 0 && <button className='btn' onClick={clearItems}>
        목록 지우기 <MdDelete className='btn-icon'/>
      </button>}
    </>
  )
};

export default ExpenseList;