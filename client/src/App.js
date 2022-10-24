import React, {useState, useEffect} from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';

import NavBar from "./components/NavBar"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Home from "./components/Home"

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [currentCandidate, setCurrentCandidate] = useState({})
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    fetch(`/logged_in`)
      .then(res => {
        if (res.ok) {
          setLoggedIn(true)
          res.json()
            .then(
              user => {
                setCurrentCandidate(user)
              }
            )
        }
      }
      )
  }, [loggedIn]);

  return (
  <BrowserRouter>
  <NavBar
      loggedIn={loggedIn}
      currentUser={currentCandidate}
      setLoggedIn={setLoggedIn}
      setCurrentUser={setCurrentCandidate}
      visible={visible}
      setVisible={setVisible}
        />
  <div className="app">
    <Switch>
      <Route path="/signup">
        <Signup
          setCurrentCandidate={setCurrentCandidate}
          setLoggedIn={setLoggedIn}
        />
      </Route>
      <Route exact path="/login">
            <Login
              setCurrentCandidate={setCurrentCandidate}
              setLoggedIn={setLoggedIn}
              visible={visible}
              setVisible={setVisible} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
    </Switch>
  </div>
</BrowserRouter>


);
}
