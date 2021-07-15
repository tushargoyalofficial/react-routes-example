import * as React from "react";

const Login: React.FC = () => (
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: 'center'
    }}
  >
    <h2>Welcome to Login Screen</h2>
    <p>Here user will authenticate himself</p>
    <button onClick={() => {}}>
      SIGNUP
    </button>
  </div>
);

export default Login;
