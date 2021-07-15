import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

interface IProps extends RouteComponentProps {}

const Signup: React.FC<IProps> = (props: IProps) => (
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
    }}
  >
    <h2>Welcome to Signup Screen</h2>
    <p>Here user will register himself</p>
    <button
      onClick={() => {
        props.history.push("/drawer/users");
      }}
    >
      DASHBOARD
    </button>
  </div>
);

export default Signup;
