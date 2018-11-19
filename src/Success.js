import React from 'react';
import { withRouter } from 'react-router-dom';

function Success(props) {
  return (
    <div>
      You are Logged In
      <button onClick={() => {
        localStorage.removeItem('user');
        props.history.push('/');
      }}>Log Out</button>
    </div>
  )
}

export default withRouter(Success);
