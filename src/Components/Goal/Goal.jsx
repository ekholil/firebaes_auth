import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./goal.css";
const Goal = () => {
  return (
    <div className="main">
      <div className="box">
        <div className="links">
          <Link className="active" to="/goals">
            GOAL
          </Link>
          <Link to="/activity">ACTIVITY</Link>
          <Link to="/profile">PROFILE</Link>
          <Link to="/selectcoach">SELECT COACH</Link>
        </div>
        <div className="main-parts">
          <div className="part">
            <h2>Goal</h2>
            <p>
              Select your primary goal. What do you want to accomplish in the
              next few months?
            </p>
          </div>
          <div className="part">
               <form action="">
               <input type="radio" id="lean" name='goal' />
               <label htmlFor="lean">Get Leaner</label>  <br />
               <input type="radio" id="active" name='goal' />
               <label htmlFor="active">Get Active Again</label> <br />
               <input type="radio" id="pain" name='goal' />
               <label htmlFor="pain">Reduce Pain or Injury</label> <br />
               <input type="radio" id="cardio" name='goal' />
               <label htmlFor="cardio">improve Cardio or Speed</label> <br />
               <input type="radio" id="sport" name='goal' />
               <label htmlFor="sport">Improve sports performance</label> <br />
               <input className="btn" type="button" value='Submit' />
               </form>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Goal;
