import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRegister } from './actions';

class Register extends Component {
  state = {
    name: '',
    username: '',
    password: '',
  }

  componentDidUpdate(prevProps) {
    if (this.props.login.register !== prevProps.login.register) {
      this.props.history.push('/');
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleRegisterUser = (event) => {
    event.preventDefault();
    const user = {
      firstName: this.state.name,
      lastName: 'test',
      username: this.state.username,
      password: this.state.password,
    }
    this.props.dispatchfetchRegister(user);
  }

  render() {
    const { name, username, password } = this.state;

    return (
      <form onSubmit={this.handleRegisterUser} className="register-form">
        <div className="form-group">
          <label htmlFor="nnameRegisterame">Name</label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="nameRegister"
            placeholder="Name"
            value={name}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="usernameRegister">Username</label>
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
          <label htmlFor="passwordRegister">Password</label>
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
    )
  }
}

const mapStateToProps = ({ login }) => ({
  login,
})

const mapDispatchToProps = (dispatch) => ({
  dispatchfetchRegister: (data) => dispatch(fetchRegister(data)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));
