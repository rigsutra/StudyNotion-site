import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SignupForm = ({ setIsLoggedin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [showCreatePass, setShowCreatePass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const [accountType, setAccountType] = useState("student");

  function handledata(event) {
    const { name, value } = event.target;
    setFormData((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmpassword) {
      toast.error("Password don't match");
      return;
    }

    setIsLoggedin(true);
    toast.success("Account Created");
    navigate("/dashboard");
    const accountdata = {
      ...formData,
    };

    console.log(accountdata);
  }
  return (
    <div>
      <div className="flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max">
        <button
          onClick={() => setAccountType("student")}
          className={`${
            accountType === "student"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200 "
          } py-2 px-5 rounded-full transition-all`}
        >
          Student
        </button>
        <button
          onClick={() => setAccountType("instructor")}
          className={`${
            accountType === "instructor"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200 "
          } py-2 px-5 rounded-full transition-all`}
        >
          Instructor
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-x-4">
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name <sub className="text-pink-200">*</sub>
            </p>
            <input
              type="text"
              placeholder="Enter first name"
              value={formData.firstname}
              name="firstname"
              required
              onChange={handledata}
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
          </label>
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name <sub className="text-pink-200">*</sub>
            </p>
            <input
              type="text"
              placeholder="Enter last name"
              value={formData.lastname}
              name="lastname"
              required
              onChange={handledata}
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
          </label>
        </div>

        <label className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email Address <sub className="text-pink-200">*</sub>
          </p>
          <input
            type="email"
            placeholder="Enter email address"
            value={formData.email}
            name="email"
            required
            onChange={handledata}
            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
          />
        </label>

        <div className="flex gap-x-4">
          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password <sub className="text-pink-200">*</sub>
            </p>
            <input
              type={showCreatePass ? "text" : "password"}
              placeholder="Enter password"
              value={formData.password}
              name="password"
              required
              onChange={handledata}
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />

            <span
              onClick={() => setShowCreatePass(!showCreatePass)}
              className="absolute right-3 top-[38px] cursor-pointer z-10"
            >
              {showCreatePass ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password <sub className="text-pink-200">*</sub>
            </p>
            <input
              type={showConfirmPass ? "text" : "password"}
              placeholder="Confirm password"
              value={formData.confirmpassword}
              name="confirmpassword"
              required
              onChange={handledata}
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
            <span
              onClick={() => setShowConfirmPass(!showConfirmPass)}
              className="absolute right-3 top-[38px] cursor-pointer z-10"
            >
              {showConfirmPass ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 w-full">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
