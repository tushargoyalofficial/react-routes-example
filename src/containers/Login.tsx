import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

interface IProps extends RouteComponentProps {}

const Login: React.FC<IProps> = (props: IProps) => (
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
    }}
  >
    <h2>Welcome to Login Screen</h2>
    <p>Here user will authenticate himself</p>
    <button
      onClick={() => {
        props.history.push("/signup");
      }}
    >
      SIGNUP
    </button>
  </div>
);

export default Login;
