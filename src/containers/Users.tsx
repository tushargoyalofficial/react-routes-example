import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

interface IProps extends RouteComponentProps {}

const Users: React.FC<IProps> = (props: IProps) => (
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
    }}
  >
    <h2>Welcome to Users Screen</h2>
    <p>Here users list will be shown.</p>
  </div>
);

export default Users;
