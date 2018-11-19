import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchLogin } from './actions';

class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  componentDidUpdate(prevProps) {
    if (this.props.login.userLogin !== prevProps.login.userLogin) {
      this.props.history.push('/');
    }
    if (this.props.login.messageErr !== prevProps.login.messageErr) {
      this.props.history.push('/error');
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleLoginUser = (event) => {
    event.preventDefault();

    const { username, password } = this.state;

    if (username && password) {
      this.props.dispatchfetchLogin(username, password);
    }
  }

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <form onSubmit={this.handleLoginUser} className="login-form">
          <div className="form-group">
            <label htmlFor="usernameLogin">Username</label>
            <input
              name="username"
              type="text"
              className="form-control"
              id="usernameRegister"
              placeholder="Username"
              value={username}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwordLogin">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="passwordRegister"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <Link to={'/Register'}>Register</Link>
      </div>
    )
  }
}

const mapStateToProps = ({ login }) => ({
  login,
})

const mapDispatchToProps = (dispatch) => ({
  dispatchfetchLogin: (username, password) => dispatch(fetchLogin(username, password)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
