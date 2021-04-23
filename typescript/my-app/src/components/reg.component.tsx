import * as React from 'react';
import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from '../services/axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Registration : React.FC<any> = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userName, setUserName] = useState('');

function Load () {
    return (
      <p>Loading ...</p>
    );
  }

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    try {
      event.preventDefault();
      setLoading(true);
      const userData = await axios.post('/user/signup',
        {
          firstName, lastName, email, password, phoneNumber, userName,
        });
      const { status } = userData.data;
      if (status === 201) {
        history.push('/dashboard');
      }
      const { token } = userData.data.data;
      console.log(token);
      window.localStorage.setItem('token', token);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Load />}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstName}
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={lastName}
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={phoneNumber}
          placeholder="Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={userName}
          placeholder="User Name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <input type="submit" value="Sign up" />
        <Link to={{ pathname: '/login' }}>
          <h5> Log in.</h5>
        </Link>

        <Link to={{ pathname: '/resource' }}>
          <h5> Add a resource.</h5>
        </Link>
      </form>
    </>
  );
}


export default Registration