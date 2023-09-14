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
  //*********** state values **********/
  // all expenses, add expense
  const [expenses,setExpenses] = useState(initialExpenses);
  // single expense
  const [charge,setCharge] = useState('');
  // single amout
  const [amount,setAmount] = useState('');
  //alert
  const [alert,setAlert] = useState({show:false});
  // //edit
  // const [edit,setEdit] = useState(false);
  // //edit item
  // const [id,setId] = useState(0);
  //*********** functionality **********/
  const handleCharge = (e) =>{
    setCharge(e.target.value);
  }
  const handleAmount = (e) =>{
    setAmount(e.target.value);
  };
  // handle alert
  const handleAlert = ({type,text}) => {
    setAlert({show:true,type,text});
    setTimeout(() => {
      setAlert({show:false})
    },3000)
  }
  //handle submit
  const handleSubmit = (e) =>{
    
    e.preventDefault();
    if(charge !== '' && amount>0){
      const singleExpense = {id:uuid(),charge,amount};
      setExpenses([...expenses,singleExpense]);
      // setExpenses(...[expenses],[singleExpense]) 아님..!

      handleAlert({type:'success',text:'지출 내역이 생성되었습니다'});

      setCharge('');
      setAmount('');
    }else{
      //handle alert called
      handleAlert({type:'danger',text:'모든 항목을 채워 넣어주세요 !!'})
    }
  }

  console.log(expenses);
  //useState(initialExpenses) 0번째에는 Array, 1번째에는 function이 들어있음.
  
  // clear all items
  const clearItems = () => {
    //console.log("cleared all items");
    setExpenses([]);
    handleAlert({type:'danger',text:'모든 항목이 삭제되었습니다 !!'})
  };
  //handle delete
  const handleDelete = (id) => {
    //console.log(`item deleted : ${id}`);
    let tempExpenses = expenses.filter(item => 
      item.id !==id);
    setExpenses(tempExpenses);
    handleAlert({type:'danger',text:'항목이 삭제되었습니다'})
  }
  // handle edit
  const handleEdit = (id) => {
    console.log(`item edited : ${id}`)
  }

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <Alert />
      <h1>예산 계산기</h1>
      <main className='App'>
        <ExpenseForm charge={charge} amount={amount} handleCharge={handleCharge} handleAmount={handleAmount} handleSubmit={handleSubmit} />
        <ExpenseList expenses={expenses} handleDelete={handleDelete} handleEdit={handleEdit} clearItems={clearItems} />
      </main>
      <h1>총 지출 :  <span className='total'>
        {expenses.reduce((acc,curr)=>{
          return acc+=parseInt(curr.amount);
        },0)}
      </span> 원 </h1>
    </>
  );
}

export default App;
