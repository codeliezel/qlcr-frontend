import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <>
      <h1 align="center">hey there!</h1>
      <Link to={{ pathname: '/' }}>
        <h5 align="center"> Back.</h5>
      </Link>

      <Link to={{ pathname: '/resource' }}>
        <h5 align="center"> Add a resource.</h5>
      </Link>
    </>
  );
}
