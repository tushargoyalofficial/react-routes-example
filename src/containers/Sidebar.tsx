import * as React from "react";

const Sidebar = () => {
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
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "60%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <h2>Welcome to Login Screen</h2>
          <p>Here user will authenticate himself</p>
          <button onClick={() => {}}>SIGNUP</button>
        </div>
      </div>
      {/* Main drawer rernder section */}
    </div>
  );
};

export default Sidebar;
