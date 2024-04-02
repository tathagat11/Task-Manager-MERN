import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./registration.scss";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Background from "../background/Background";

const SignUp = () => {
  return (
    <>
    
      <div className="signup-form">
        <div className="signup-form__form-group">
          <div className="mainText">Sign up and never miss a task again</div>
          <div className="subText">Enter your email address and choose a password to set up your account</div>
          <div className="field">
          <input type="text" placeholder="username" />
          </div>
          <div className="field"><input type="email" name="Enter Email" placeholder="email" id="" />
          </div>
          <div className="field">
          <input
            type="password"
            name="Enter Password"
            placeholder="password"
            id=""
          />
          </div>
          <div className="signUpButton">
          <button>
            Sign up
            <FontAwesomeIcon icon={faArrowRight} className="signUpIcon"/>
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
