import React from "react";
import { nanoid } from "nanoid";

// Screens
import Users from "../../containers/Users";
import Books from "../../containers/Books";
import Settings from "../../containers/Settings";

export interface IDrawerRoutes {
  path: string;
  exact: boolean;
  main: React.FC<any>;
  id: string;
}

const initials = "/drawer"; // there is /drawer stacked named route
const drawerRoutes: IDrawerRoutes[] = [
  {
    path: `${initials}/users`,
    exact: true,
    main: Users,
    id: nanoid(),
  },
  {
    path: `${initials}/books`,
    exact: true,
    main: Books,
    id: nanoid(),
  },
  {
    path: `${initials}/settings`,
    exact: true,
    main: Settings,
    id: nanoid(),
  },
];

export default drawerRoutes;
