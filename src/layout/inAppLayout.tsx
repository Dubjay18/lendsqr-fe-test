import React from "react";
import "./_in-app.scss";
import Sidebar from "./sidebar/sidebar";
import Topbar from "./topbar/topbar";

export default function InAppLayout({ children }:{children: React.ReactNode}) {
  return (
    <div className="in-app-layout">
      <Topbar />
      <Sidebar />

      <div className="main-content">{children}</div>
    </div>
  );
}
