import React from 'react';
import Sidebar from './Sidebar';

function Layout({ children }) {
  return (
    <div className="mx-auto bg-[#F9E8C9] flex gap-5">
      {/* Sidebar */}
      <div className="flex-[.2] border">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="content flex-[.8] ">
        {children}
      </div>
    </div>
  );
}

export default Layout;
