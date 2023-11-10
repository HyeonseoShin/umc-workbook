;<img
  style={{
    width: '154px',
    height: '20px',
  }}
  src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
  alt="로고"
/>

/*import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Main from './pages/Main/Main'*/

class Routes extends React.Component {
  render() {
    return (
      /*<Router>
        <Nav />
        <Switch>
          <Route exact path="/" Component={Login} />
          <Route exact path="/signup" Component={Signup} />
          <Route exact path="/main" Component={Main} />
        </Switch>
        <Footer />
      </Router>*/

      <div>
        style=
        {{
          display: 'flex',
          padding: '10vw',
        }}
        <any to="/">
          <img
            style={{ width: '20vw', height: '5vb', marginLeft: '20vw' }}
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="logo"
          ></img>
        </any>
        <any
          to="/movie"
          style={{ margin: '0px 10px 0px 3vw', textDecoration: 'none' }}
        >
          Movie
        </any>
        <any to="/tv" style={{ margin: '0 5vw', textDecoration: 'nonr' }}>
          TV
        </any>
        <any
          to="/celebirty"
          style={{ margin: '0 5vw', textDecoration: 'none' }}
        >
          Celebirty
        </any>
      </div>
    )
  }
}

export default Routes
