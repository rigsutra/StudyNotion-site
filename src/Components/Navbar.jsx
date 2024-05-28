/* eslint-disable react/prop-types */
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
  let isLoggedin = props.isLoggedin;
  let setIsLoggedin = props.setIsLoggedin;

  return (
    <div className="flex justify-evenly">
      <Link to="/">
        <img src={logo} width={160} height={30} loading="lazy" />
      </Link>
      <nav className="flex">
        <ul className="flex gap-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* login - signup -logout - Dashboard */}

      <div className="flex ml-5 mr-3 gap-3">
        {!isLoggedin && (
          <Link to="/Login">
            <button>Login</button>
          </Link>
        )}
        {!isLoggedin && (
          <Link to="/signup">
            <button>Sign up</button>
          </Link>
        )}
        {isLoggedin && (
          <Link to="/">
            <button
              onClick={() => {
                setIsLoggedin(false);
                toast.success("Logged out");
              }}
            >
              Logout
            </button>
          </Link>
        )}
        {isLoggedin && (
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
