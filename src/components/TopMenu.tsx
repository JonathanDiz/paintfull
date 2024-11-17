import React from "react";

const TopMenu: React.FC = () => {
    return (
        <div style={{ display: "flex", padding: "10px", backgroundColor: "#333", color: "white" }}>
            <button style={{ marginRight: "15px" }}>File</button>
            <button style={{ marginRight: "15px" }}>Edit</button>
            <button style={{ marginRight: "15px" }}>View</button>
            <button style={{ marginRight: "15px" }}>Window</button>
            <button>Help</button>
        </div>
    );
};

export default TopMenu;
