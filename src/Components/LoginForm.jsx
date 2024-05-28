import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const LoginForm = () => {
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

  return (
    <form>
      <label>
        <p>
          Email Address <sup>*</sup>
        </p>
        <input
          type="text"
          required
          value={formData.email}
          onChange={handledata}
          name="email"
          placeholder="Email"
        />
      </label>
      <label>
        <p>
          Password <sup>*</sup>
        </p>
        <input
          type={showpassword ? "text" : "password"}
          required
          value={formData.password}
          onChange={handledata}
          name="password"
          placeholder="Password"
        />

        <span onClick={() => setShowpassword((prev) => !prev)}>
          {showpassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>

        <Link to="#">
          <p>Forget Password</p>
        </Link>
      </label>

      <button>Sign In</button>
    </form>
  );
};

export default LoginForm;
