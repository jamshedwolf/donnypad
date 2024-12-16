import React from "react";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="bg-[#F9E8C9] flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="h-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="content flex-1 overflow-auto ">{children}</div>
    </div>
  );
}

export default Layout;
