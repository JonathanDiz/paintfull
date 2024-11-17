import React from "react";

const Sidebar: React.FC = () => {
    return (
        <div style={{ width: "200px", backgroundColor: "#2e2e2e", color: "white", padding: "10px" }}>
            <h3>Colors</h3>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {["#000", "#f00", "#0f0", "#00f", "#ff0", "#f0f", "#0ff"].map((color) => (
                    <div
                        key={color}
                        style={{
                            width: "30px",
                            height: "30px",
                            backgroundColor: color,
                            border: "1px solid #555",
                            cursor: "pointer",
                        }}
                    />
                ))}
            </div>
            <h3 style={{ marginTop: "20px" }}>Layers</h3>
            <ul>
                <li style={{ cursor: "pointer", margin: "10px 0" }}>Layer 1</li>
                <li style={{ cursor: "pointer", margin: "10px 0" }}>Layer 2</li>
            </ul>
        </div>
    );
};

export default Sidebar;
