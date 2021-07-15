import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

interface IProps extends RouteComponentProps {}

const Books: React.FC<IProps> = (props: IProps) => (
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
    }}
  >
    <h2>Welcome to Books Screen</h2>
    <p>Here books list will be shown.</p>
  </div>
);

export default Books;
