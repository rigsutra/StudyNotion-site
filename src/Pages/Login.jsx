/* eslint-disable react/prop-types */
import Template from "../Components/Template";
import loginImg from "../assets/login.png";
const Login = ({ setIsLoggedin }) => {
  return (
    <Template
      title="Welcome Back"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={loginImg}
      formType="login"
      setIsLoggedin={setIsLoggedin}
    />
  );
};

export default Login;
