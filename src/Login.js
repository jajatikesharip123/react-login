import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Login extends Component {
  render() {
    return (
      <div>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="usernameLogin">Username</label>
            <input type="text" className="form-control" id="usernameLogin" placeholder="Username" />
          </div>
          <div className="form-group">
            <label htmlFor="passwordLogin">Password</label>
            <input type="password" className="form-control" id="passwordLogin" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <Link to={'/Register'}>Register</Link>
      </div>
    )
  }
}

const mapStateToProps = () => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
