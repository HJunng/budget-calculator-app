import React from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Alert from './components/Alert';
import { v4 as uuid } from 'uuid';


const initialExpenses = [
  {id:uuid(), charge:"rent", amount:1600},
  {id:uuid(), charge:"car payment", amount:400},
  {id:uuid(), charge:"credit", amount:1200},
  
];

console.log(initialExpenses);

function App() {
  return (
    <>
      <Alert></Alert>
      <ExpenseForm />
      <ExpenseList />
    </>
  );
}

export default App;
