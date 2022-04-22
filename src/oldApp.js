import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({});

  const fetchUsers = async () => {
    const res = await fetch('http://127.0.0.1:2020/api/index.cfm?method=users');
    const data = await res.json();
    // console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, [newUser]);

  const addNewUser = async (event) => {
    event.preventDefault();

    let firstName = document.querySelector('#firstName').value;
    let lastName = document.querySelector('#lastName').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    let userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    const res = await fetch(
      'http://127.0.0.1:2020/api/index.cfm?method=users',
      {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await res.json();
    setNewUser(data);
  };

  return (
    <div className='App'>
      <h1>App</h1>
      <ul>
        {users.DATA?.map((user) => (
          <li key={user.USERID}>{user.FIRSTNAME}</li>
        ))}
      </ul>

      <hr />

      <form onSubmit={addNewUser}>
        <div>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            placeholder='First Name'
          />
        </div>
        <div>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            id='lastName'
            name='lastName'
            placeholder='Last Name'
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' name='email' placeholder='Email' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Password'
          />
        </div>
        <input id='formSubmit' type='submit' value='Submit'></input>
      </form>
    </div>
  );
}

export default App;
