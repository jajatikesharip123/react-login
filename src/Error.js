import React from 'react';
import { Link } from 'react-router-dom';

function Error(props) {
  return (
    <div>
      <div>Fail to Login</div>
      <Link to={'/login'}>Try again</Link>
    </div>
  )
}

export default Error;
