import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Register extends Component {
  render() {
    return (
      <form className="register-form">
        <div className="form-group">
          <label htmlFor="nnameRegisterame">Name</label>
          <input type="text" className="form-control" id="nameRegister" placeholder="Username" />
        </div>
        <div className="form-group">
          <label htmlFor="usernameRegister">Username</label>
          <input type="text" className="form-control" id="usernameRegister" placeholder="Username" />
        </div>
        <div className="form-group">
          <label htmlFor="passwordRegister">Password</label>
          <input type="password" className="form-control" id="passwordRegister" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

const mapStateToProps = () => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));
