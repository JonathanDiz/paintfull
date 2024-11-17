import React from "react";

interface ToolsSidebarLayoutProps {
    sidebar: React.ReactNode;
    tools: React.ReactNode;
    children?: React.ReactNode; // Agrega esta propiedad
}

const ToolsSidebarLayout: React.FC<ToolsSidebarLayoutProps> = ({ sidebar, tools, children }) => {
    return (
        <div style={{ display: "flex" }}>
            <div style={{ width: "200px", background: "#f4f4f4" }}>
                {sidebar}
            </div>
            <div style={{ flex: 1, padding: "10px" }}>
                {tools}
                {children} {/* Aquí renderizas los children */}
            </div>
        </div>
    );
};

export default ToolsSidebarLayout;
