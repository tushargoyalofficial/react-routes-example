import * as React from "react";

const FourZeroFour: React.FC = () => (
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: 'center'
    }}
  >
    <h2>404 Not Found</h2>
    <p>The route which you are trying to access, does not exists. Please check the URL or routes of this app.</p>
    <button onClick={() => {}}>
      SIGNUP
    </button>
  </div>
);

export default FourZeroFour;
