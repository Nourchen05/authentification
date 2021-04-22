import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../JS/actions/user";
import "./Navbar.css";
const Navbar = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const dispatch = useDispatch();
  return (
    <header>
      <Link to="/">
        <h2>WS_Authentification</h2>
      </Link>
      {isAuth ? (
        <Link to="/" onClick={() => dispatch(logout())}>
          {" "}
          <a href="#" className="btn-area">
            Logout
          </a>
        </Link>
      ) : (
        <div className="btns">
          <Link to="/signup">
            {" "}
            <a href="#" className="btn-area">
              SignUp
            </a>
          </Link>

          <Link to="/signin">
            <a href="#" className="btn-area">
              SignIn
            </a>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
