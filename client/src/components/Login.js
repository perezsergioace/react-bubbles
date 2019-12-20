import React, {useState} from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [text, setText] = useState({
    username: '',
    password: ''
  })

  // console.log(text)

  const handleChanges = e => {
    setText({...text, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    axiosWithAuth()
        .post('/api/login', text)
        .then(response => {
          console.log(response.data)
          localStorage.setItem('token', response.data.payload)
          props.history.push('/bubblepage')
        })
        .catch(error => console.log('data not returned, Login.js', error))
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <div>
        <form onSubmit={handleSubmit}>
          <input name='username' tpye='text' placeholder='username' value={text.username} onChange={handleChanges} />
          <input name='password' type='password' placeholder='password' value={text.password} onChange={handleChanges} />
          <button>Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
