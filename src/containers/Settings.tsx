import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

interface IProps extends RouteComponentProps {}

const Settings: React.FC<IProps> = (props: IProps) => (
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "60%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
    }}
  >
    <h2>Welcome to Settings Screen</h2>
    <p>Here user settings will be shown.</p>
  </div>
);

export default Settings;
