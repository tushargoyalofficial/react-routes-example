import * as React from "react";
import { DrawerRoutes } from "../routes";
import { NavLink, RouteComponentProps } from "react-router-dom";

interface IProps extends RouteComponentProps {}

const Sidebar: React.FC<IProps> = (props: IProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "90vh",
        // width: "100vw",
      }}
    >
      <div style={{ flex: 1, backgroundColor: "#ededed" }}>
        <ul>
          <li
            style={{ padding: "12px", fontWeight: 600, listStyleType: "none" }}
          >
            <NavLink to={"/drawer/users"} exact={true}>
              Users
            </NavLink>
          </li>
          <li
            style={{ padding: "12px", fontWeight: 600, listStyleType: "none" }}
          >
            <NavLink to={"/drawer/books"} exact={true}>
              Books
            </NavLink>
          </li>
          <li
            style={{ padding: "12px", fontWeight: 600, listStyleType: "none" }}
          >
            <NavLink to={"/drawer/settings"} exact>
              Settings
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main drawer rernder section */}
      <div style={{ flex: 4, backgroundColor: "#fdfdfd" }}>
        <DrawerRoutes />
      </div>
      {/* Main drawer rernder section */}
    </div>
  );
};

export default Sidebar;
