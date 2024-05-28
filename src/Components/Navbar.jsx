/* eslint-disable react/prop-types */
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
  let isLoggedin = props.isLoggedin;
  let setIsLoggedin = props.setIsLoggedin;

  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/">
        <img src={logo} width={160} height={30} loading="lazy" />
      </Link>
      <nav>
        <ul className="flex gap-x-6 text-richblack-100">
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

      <div className="flex items-center gap-x-4 text-richblack-100">
        {!isLoggedin && (
          <Link to="/Login">
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Login
            </button>
          </Link>
        )}
        {!isLoggedin && (
          <Link to="/signup">
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Sign up
            </button>
          </Link>
        )}
        {isLoggedin && (
          <Link to="/">
            <button
              onClick={() => {
                setIsLoggedin(false);
                toast.success("Logged out");
              }}
              className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
            >
              Logout
            </button>
          </Link>
        )}
        {isLoggedin && (
          <Link to="/dashboard">
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
