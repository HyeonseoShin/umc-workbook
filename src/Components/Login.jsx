import React from 'react'
import { Link } from 'react-router-dom'

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div>
        <p>
        <button className={buttonClass} onClick={handleClick}>
          {buttonText}
        </button>
      </p>
      </div>
    )
  }
}

export default Login
