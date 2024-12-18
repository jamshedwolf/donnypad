import React from "react";
import Sidebar from "./Nav";
import Nav from "./Nav";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className=" relative overflow-hidden text-white   ">
   
     
      <div className="z-50 absolute w-full">
      <Nav />
      </div> 
      

      {/* Main Content */}
      <div className="text-white lg:pt-20  ">{children}</div>
      <Footer />
      
    </div>
  );
}

export default Layout;
