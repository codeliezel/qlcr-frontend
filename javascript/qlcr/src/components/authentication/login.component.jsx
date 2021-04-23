import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from '../../services/axios';

export default function Login() {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function Load() {
    return (
      <p>Loading ...</p>
    );
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setLoading(true);
      const userData = await axios.post('/user/signin',
        {
          email, password,
        });
      const { status } = userData.data;
      if (status === 200) {
        history.push('/dashboard');
      }
      const { token } = userData.data;
      console.log(token);
      window.localStorage.setItem('token', token);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Load />}
      <form onSubmit={handleSubmit} align="center">
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <input type="submit" value="Log in" />
        <Link to={{ pathname: '/' }}>
          <h5 align="center"> Sign up.</h5>
        </Link>
      </form>
    </>
  );
}
