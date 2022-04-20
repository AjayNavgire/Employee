
import './App.css';
import { useState } from "react"
import Axios from "axios"

function App() {

  // constants for creating employee
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState(0)
  const [organization, setOrganization] = useState('')
  const [designation, setDesignation] = useState('')
  const [salary, setSalary] = useState('')
  const [status, setStatus] = useState('')

  // constatns for employee list
  const [employeeList, setEmployeeList] = useState([])


  // Create Employee
  const addEmployee = () => {
    Axios.post('http://localhost:5000/api/v1/employee', {
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone: phone,
      organization: organization,
      designation: designation,
      salary: salary,
      status: status
    }).then(() => {
      console.log("Success")
    })
  }

  // Get Employee List
  const getEmployees = () => {
    Axios.get('http://localhost:5000/api/v1/employee').then((res) => {
      setEmployeeList(res.data)
    })
  }
  return (
    <div className="App">
      <div className='information'>
        <label>First Name : </label>
        <input
          type="text"
          onChange={(event) => {
            setFirstName(event.target.value)
          }}
        />
        <label>Last Name : </label>
        <input
          type="text"
          onChange={(event) => {
            setLastName(event.target.value)
          }}
        />
        <label>Email : </label>
        <input
          type="text"
          onChange={(event) => {
            setEmail(event.target.value)
          }}
        />
        <label> Phone No : </label>
        <input
          type="number"
          onChange={(event) => {
            setPhone(event.target.value)
          }}
        />
        <label>Organization : </label>
        <input
          type="text"
          onChange={(event) => {
            setOrganization(event.target.value)
          }}
        />
        <label>Designation : </label>
        <input
          type="text"
          onChange={(event) => {
            setDesignation(event.target.value)
          }}
        />
        <label>Salary : </label>
        <input
          type="number"
          onChange={(event) => {
            setSalary(event.target.value)
          }}
        />
        <label>Status : </label>
        <input
          type="number"
          onChange={(event) => {
            setStatus(event.target.value)
          }}
        />
        <button onClick={addEmployee} >Add Empolyee</button>
      </div>

      <div className='employees'>
        <button onClick={getEmployees}> Show Empolyees </button>

        {employeeList.map((val, key) => {
          return <div className='employee'> 
            <h3> First Name : {val.first_name}</h3>
            <h3> Last Name : {val.last_name}</h3>
            <h3>Email : {val.email}</h3>
            <h3>Phone : {val.phone}</h3>
            <h3> Organization : {val.organization}</h3>
            <h3>Designation : {val.designation}</h3>
            <h3>Salary : {val.salary}</h3>
            <h3>Status : {val.status}</h3>
          </div>
        })
        }
      </div>

    </div>
  );
}

export default App;
