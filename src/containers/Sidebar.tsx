import * as React from "react";
import DrawerRoutes from "../routes/DrawerRoutes";

const Sidebar: React.FC = () => {
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
            Users
          </li>
          <li
            style={{ padding: "12px", fontWeight: 600, listStyleType: "none" }}
          >
            Books
          </li>
          <li
            style={{ padding: "12px", fontWeight: 600, listStyleType: "none" }}
          >
            Settings
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
