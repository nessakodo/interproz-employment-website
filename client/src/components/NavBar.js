import React from "react";
import { NavLink } from "react-router-dom";
import 'excel_personnel_logo', from "/assets/excel_personnel_logo.png"


export default function NavBar () {

  return (
    <header>
         <h1>
          Excel Personnel
          <span role="img">
            <img className="logo" src="/assets/excel_personnel_logo.png"></img>
          </span>
        </h1>
        <nav>
          <div className="navigation">
              <button>
                <NavLink className="button" exact to="/About">
                  About
                </NavLink>
              </button>
              <button>
                <NavLink className="button" to="/Clients">
                  Clients
                </NavLink>
              </button>
              <button>
                <NavLink className="button" to="/Candidates">
                  Candidates
                </NavLink>
              </button>
              <button>
                <NavLink className="button" to="/Login">
                  Login
                </NavLink>
              </button>
          </div>
        </nav>
    </header>
  );
}



