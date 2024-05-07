import { useState } from "react";

function LoginForm() {
  // input state values always need to be strings - empty initially
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  // new state value for showing submission messages to user
  const [submitResult, setSubmitResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reloading on form submit

    // add some password validation
    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 characters long");
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
    } else {
      setSubmitResult("Successful login.");
    }
  };

  return (
    <div className="LoginForm componentBox">
      <form onSubmit={handleSubmit}>
        <div className="formRow">
          <label>
            Email Address:
            {/* Controlled form element needs both value and onChange.
    onChange handler uses event param e to access target value.
    Whenever user types, new value is stored in state. */}
            <input
              type="email"
              value={userEmail}
              name="userEmail"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="formRow">
          <label>
            Password:
            <input
              type="password"
              value={userPassword}
              name="password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </label>
        </div>
        <button>Log In</button>
        <p>{submitResult}</p>
      </form>
    </div>
  );
}
// try removing the onChange prop and typing in a field
export default LoginForm;
