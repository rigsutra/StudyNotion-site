/* eslint-disable react/prop-types */
import baseimage from "../assets/frame.png";

const Tamplete = ({ title, desc1, desc2, image, formtype }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>

        {formtype === "signup" ? <SignupForm /> : <LoginForm />}

        <div>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>

        <button>
          <p>Sign in with Google</p>
        </button>
      </div>

      <div>
        <img
          src={baseimage}
          alt="pattern"
          width={558}
          height={504}
          loading="lazy"
        />

        <img
          src={image}
          alt="Student"
          width={558}
          height={490}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Tamplete;
