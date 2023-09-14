import React,{useState} from 'react';
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

//console.log(initialExpenses);

//import useState()
//function returns [] with two values
//the actual value of the state
//function for updates/control
//default value
function App() {
  //console.log(useState());
  const [expenses,setExpenses] = useState(initialExpenses);
  console.log(expenses);
  //useState(initialExpenses) 0번째에는 Array, 1번째에는 function이 들어있음.
  

  return (
    <>
      <Alert />
      <h1>예산 계산기</h1>
      <main className='App'>
        <ExpenseForm />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>총 지출 :  <span className='total'>
        {expenses.reduce((acc,curr)=>{
          return acc+=curr.amount;
        },0)}
      </span> 원 </h1>
    </>
  );
}

export default App;
