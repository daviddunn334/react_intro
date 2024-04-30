import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';


function App() {
  const [role, setRole] = useState('dev');
  const showEmployees = true;
  let food = 'Cheese';
  return (
    
    <div className="App">
      {showEmployees ?
      <>
      <input type='text' onChange={(e) => {
        console.log(e.target.value);
        setRole(e.target.value);
      }}/>
        <Employee name='David' role={role} food='pizza'/>
        <Employee name='Jackson' role='CEO'/>
        <Employee name='Kennedy' food='Steak' role='Nurse'/>
        <Employee name='Deuce' role={role} food={food}/>
       </> 
       :
       <p>you cant see the employees</p>
      }
    </div>
  );
}

export default App;
