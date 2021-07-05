import logo from './image/Logo.png';
import header from './image/Checkflix1_small.png'
import './App.css';
import {
    Switch,
    Route, Link,
    useHistory,
} from 'react-router-dom';
import { useState } from 'react'
import Home from './page/home/Home';
import FindMovie from './page/findmovie/FindMovie';
import ComingSoon from './page/comingSoon/ComingSoon';
import GoneSoon from './page/goneSoon/GoneSoon';
import Login from './page/Authentication/Login';
import LogOut from './page/Authentication/LogOut';
import Register from './page/Authentication/Register';


function App() {
    const history = useHistory();
    const [login, setLogin] = useState(true);
    console.log(login);

  return (
    <div className="App">
      <nav>
        <ul className="navLinks">
          <li className="Logo"><img src={logo} alt="logo"/></li>
          <li><Link exact to="/">Home</Link></li>
            { login &&
          <li><Link to="/FindMovie">Find movie/serie</Link></li> }
            { login &&
          <li><Link to="/ComingSoon">Coming soon</Link></li> }
            { login &&
          <li><Link to="/GoneSoon">Gone soon</Link></li>}
            { !login &&
            <li><Link to="/Login">Login</Link></li> }
            { !login &&
            <li><Link to="/Register">Register</Link></li> }
            { login &&
            <li>Logout</li>}
        </ul>

      </nav>
      <header className="App-header">
          <img src={header} alt="checkflix"/>
      </header>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/FindMovie">
                <FindMovie />
            </Route>
            <Route path="/ComingSoon">
                <ComingSoon />
            </Route>
            <Route path="/GoneSoon">
                <GoneSoon />
            </Route>
            <Route path="/Login">
                <Login
                    login={login}
                    setLogin={setLogin}
                />
            </Route>
            <Route path="/LogOut">
                <LogOut
                    login={login}
                    setLogin={setLogin}
                />
            </Route>
            <Route path="/Register">
                <Register
                    login={login}
                    setLogin={setLogin}
                />
            </Route>
        </Switch>
    </div>
  );
}

export default App;
