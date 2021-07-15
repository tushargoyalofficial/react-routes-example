import * as React from "react";

const Signup: React.FC = () => (
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: 'center'
    }}
  >
    <h2>Welcome to Signup Screen</h2>
    <p>Here user will authenticate himself</p>
    <button onClick={() => {}}>
      DASHBOARD
    </button>
  </div>
);

export default Signup;
