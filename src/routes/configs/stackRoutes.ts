import React from "react";
import { nanoid } from "nanoid";

// Screens
import Login from "../../containers/Login";
import Signup from "../../containers/Signup";
import Sidebar from "../../containers/Sidebar";
import FourZeroFour from "../../containers/FourZeroFour";

export interface IStackRoutes {
  path: string;
  exact: boolean;
  main: React.FC<any>;
  id: string;
}

const stackRoutes: IStackRoutes[] = [
  { path: "/", exact: true, main: Login, id: nanoid() },
  { path: "/signup", exact: true, main: Signup, id: nanoid() },
  {
    path: "/drawer", // add this as initial for inside pages of drawer
    exact: false,
    main: Sidebar,
    id: nanoid(),
  },
  {
    path: "**",
    exact: false,
    main: FourZeroFour,
    id: nanoid(),
  },
];

export default stackRoutes;
