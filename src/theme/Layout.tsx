import React from "react";
import TopMenu from "../components/TopMenu";
import Toolbar from "../components/Toolbar";
import Sidebar from "../components/Sidebar";
import Canvas from "../components/Canvas";

const Layout: React.FC = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            <TopMenu />
            <div style={{ display: "flex", flex: 1 }}>
                <Toolbar />
                <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Canvas />
                </div>
                <Sidebar />
            </div>
        </div>
    );
};

export default Layout;
