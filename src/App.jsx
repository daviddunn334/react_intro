import './App.css';
import Employee from './components/Employee';



function App() {
  const showEmployees = true;
  return (
    
    <div className="App">
      {showEmployees ?
      <>
        <Employee name='David' role='Intern' food='pizza'/>
        <Employee name='Jackson' role='CEO'/>
        <Employee name='Kennedy' food='Steak'/>
        
       </> 
       :
       <p>you cant see the employees</p>
      }
      
       
      
      

    
    </div>
  );
}

export default App;
