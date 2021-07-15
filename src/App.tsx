import React from "react";
import StackRoutes from "./routes";

const App: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <header
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "grey",
          width: "100%",
          height: 64,
          textAlign: "center",
        }}
      >
        <p>this is header</p>
      </header>
      {/* All stack routes (unprotected) will render here */}
      <div style={{ marginTop: 64 }}>
        <StackRoutes />
      </div>
    </div>
  );
};

export default App;
