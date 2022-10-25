import React, {useState, useEffect} from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';

// Page imports
import NavBar from "./components/NavBar"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Home from "./components/Home"
import Profile from "./components/Profile"

export default function App() {

  // states declared
  const [loggedIn, setLoggedIn] = useState(false)
  const [currentCandidate, setCurrentCandidate] = useState({})
  const [visible, setVisible] = useState(false)
  const [profileCard, setProfileCard] = useState(true)


  // log in fetch
  useEffect(() => {
    fetch(`/logged_in`)
      .then(res => {
        if (res.ok) {
          setLoggedIn(true)
          res.json()
            .then(
              candidate => {
                setCurrentCandidate(candidate)
              }
            )
        }
      }
      )
  }, [loggedIn]);

  // routes from app using browser router declared
  return (
  <BrowserRouter>
  <NavBar
      loggedIn={loggedIn}
      currentCandidate={currentCandidate}
      setLoggedIn={setLoggedIn}
      setCurrentCandidate={setCurrentCandidate}
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
          {currentCandidate &&
            <Route exact path="/profile">
              <Profile
                currentCandidate={currentCandidate}
                setCurrentCandidate={setCurrentCandidate}
                setProfileCard={setProfileCard}
             />
            </Route>
          }
    </Switch>
  </div>
</BrowserRouter>


);
}