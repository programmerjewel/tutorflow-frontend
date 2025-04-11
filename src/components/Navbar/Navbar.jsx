import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import logo from '../../assets/Tutorflow_logo.svg'

const Navbar = () => {

  const {user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () =>{
    signOutUser()
    .then(()=>{
      console.log('successfully logged out!');
    })
    .catch(err =>console.log('failed to sign out', err));
  }

  const li = <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/findtutors'>Find Tutors</NavLink></li>
            <li><NavLink to='/add-tutor'>Add Tutors</NavLink></li>
          
          </>
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {
              li
            }
          </ul>
        </div>
        <Link className="flex gap-1.5 font-extrabold text-2xl text-violet-600"><img src={logo} alt="" className="w-7" />TutorFlow</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            li
          }
        </ul>
      </div>
      <div className="navbar-end">
        {
          user? <><button onClick={handleSignOut} className="btn">Log Out</button></> : <><Link to='/login' className="btn">Log In</Link><Link to='/register' className="ml-2 btn btn-primary">Register</Link></>
        }
        
      </div>
    </div>
  );
};

export default Navbar;
