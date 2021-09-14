
import './App.css';
import { useState, useEffect } from 'react';
import Team from "./Team";
import Member from "./Member";
import axios from 'axios';


const initValues = {
  //text
  name: '',
  age: '',
  email: '',
  phone: '',
  //Dropdown
  state: '',
  role: ''
}

function App() {
  const [members, setMembers] = useState([]);
  const [curValues, setCurValues] = useState(initValues);
  const [error,setError] = useState('');


  const renderMembers = (inputName, inputValue) => {
    setCurValues({...curValues, [inputName]: inputValue})
  }
  const submitMembers = () => {
    const newMember= {
      name: curValues.name.trim(),
      age: curValues.age.trim(),
      email: curValues.email.trim(),
      phone: curValues.phone.trim(),
      state: curValues.state,
      role: curValues.role
    }

    if (!newMember.name) {
      setError("You must enter a name");
    } else if (!newMember.age) {
      setError("You must enter an age");
    } else if (!newMember.email) {
      setError("You must enter an email");
    } else if (!newMember.phone) {
      setError("You must enter a phone number");
    } else if (!newMember.state) {
      setError("You must select a state");
    } else if (!newMember.role) {
      setError("You must select a role");
    } else {
      setError("");
    }

    if (!error) {
      setMembers(members.concat(newMember));
      setCurValues(initValues);

      console.log(members);
    }
  }


  return (
    <div className="App">
      <header className="App-header">
      <h1>Team Members</h1>
      </header>
      {error && <h3 className="error-text">{error}</h3>}
      <Member
        update={renderMembers}
        submit={submitMembers}
        values={curValues}
      />
      {!error &&
        members.map(member => {
          return (
            <Team key={member.id} details={member} />
          )
        })
      }
    </div>
  );
}




export default App;
