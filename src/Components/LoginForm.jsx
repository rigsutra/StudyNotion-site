/* eslint-disable react/prop-types */
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({ setIsLoggedin }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showpassword, setShowpassword] = useState(false);

  function handledata(event) {
    const { name, value } = event.target;
    setFormData((predata) => ({
      ...predata,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoggedin(true);
    toast.success("Logged In");
    navigate("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full gap-y-4 mt-6">
      <label className="w-full">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Email Address <sup className="text-pink-200">*</sup>
        </p>
        <input
          type="email"
          required
          value={formData.email}
          onChange={handledata}
          name="email"
          placeholder="Email"
          className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
        />
      </label>
      <label className="w-full relative">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Password <sup className="text-pink-200">*</sup>
        </p>
        <input
          type={showpassword ? "text" : "password"}
          required
          value={formData.password}
          onChange={handledata}
          name="password"
          placeholder="Password"
          className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
        />

        <span
          onClick={() => setShowpassword((prev) => !prev)}
          className="absolute right-3 top-[38px] cursor-pointer "
        >
          {showpassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>

        <Link to="#">
          <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
            Forget Password
          </p>
        </Link>
      </label>

      <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900">
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
