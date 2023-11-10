import React from 'react'
import { Link } from 'react-router-dom'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn : false,
    }
  }

  handleLoginClick = () => {
    this.setState(
      {
        isLoggedIn : true,
      }
    )
  }

  handleLogoutClick = () => {
    this.setState(
      {
        isLoggedIn : false,
      }
    )
  }

  render() {
    const { isLoggedIn } = this.state;
    const buttonClass = isLoggedIn ? "logout-btn" : "login-btn";
    const buttonText = isLoggedIn ? "Logout" : "Login";
    const handleClick = isLoggedIn ? this.handleLogoutClick : this.handleLoginClick

    return (
      <div>
        <p>
        <button className={buttonClass} onClick={handleClick}>
          {buttonText}
        </button>
        {isLoggedIn ? "Welcome" : "Log-in"}.
      </p>
      </div>
    )
  }
}

export default Login
