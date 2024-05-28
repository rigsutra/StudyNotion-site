import Template from "../Components/Template";
import signupImg from "../assets/signup.png";

// eslint-disable-next-line react/prop-types
const Signup = ({ setIsLoggedin }) => {
  return (
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
      setIsLoggedin={setIsLoggedin}
    />
  );
};

export default Signup;
