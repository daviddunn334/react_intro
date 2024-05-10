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
        id: 1,
        name: "David", 
        role: "developer", 
        img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: 2,
        name: "Kennedy", 
        role: "Nurse", 
        img: "https://images.pexels.com/photos/4491475/pexels-photo-4491475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
      },
      {
        id: 3,
        name: "Jackson", 
        role: "CEO", 
        img: "https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
      },
      {
        id: 4,
        name: "Deuce", 
        role: "Dog", 
        img: "https://images.pexels.com/photos/942260/pexels-photo-942260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
      },
      {
        id: 5,
        name: "Bob", 
        role: "Chef", 
        img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=800" 
      }
    ]
  )

  function updateEmployee(id, newName, newRole){
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id){
        return{...employee, name: newName, role: newRole}
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }


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
              key={employee.id}
              id={employee.id}
              name={employee.name}
              role={employee.role} 
              img={employee.img}
              updateEmployee={updateEmployee}
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
