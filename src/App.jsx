import './Index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';


function App() {
  const [role, setRole] = useState('dev');
  const showEmployees = true;
  const [employees, setEmployees] = useState(
    [
      {
        name: "David", 
        role: "developer", 
        img: "https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
      },
      {
        name: "Kennedy", 
        role: "Nurse", 
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
      },
      {
        name: "Jackson", 
        role: "CEO", 
        img: "https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
      },
      {
        name: "Deuce", 
        role: "Dog", 
        img: "https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
      },
      {
        name: "Bob", 
        role: "Chef", 
        img: "https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
      }
    ]
  )
  return (
    
    <div className="App">
      {showEmployees ?
      <>
        <input type='text' onChange={(e) => {
          console.log(e.target.value);
          setRole(e.target.value);
        }}/>
          <div className='flex flex-wrap justify-center'> 
            {employees.map((employee) => {
            return ( 
              <Employee 
              key={uuidv4()}
              name={employee.name}
              role={employee.role} 
              img={employee.img}
              />
            );
            })}
          </div>
       </> 
       :
       <p>you cant see the employees</p>
      }
    </div>
  );
}

export default App;
