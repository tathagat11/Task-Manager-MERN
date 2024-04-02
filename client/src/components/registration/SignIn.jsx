import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./registration.scss";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SignIn = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };
  return (
    <>
    
      <div className="signup-form">
        <div className="signup-form__form-group">
          <div className="mainText">Log in to Task Manager</div>
          <div className="subText">Enter your username and password to log into your account</div>
          <div className="field">
          <input type="text" placeholder="username" onChange={handleUsernameChange}/>
          </div>
          <div className="field">
          <input
            type="password"
            name="Enter Password"
            placeholder="password"
            onChange={handlePasswordChange}
          />
          </div>
          <div className="signUpButton">
          <button type="submit" onClick={handleSubmit}>
            Log In
            <FontAwesomeIcon icon={faArrowRight} className="signUpIcon"/>
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
