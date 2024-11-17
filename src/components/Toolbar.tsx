import React from "react";

const Toolbar: React.FC = () => {
    const tools = ["Brush", "Eraser", "Fill", "Select", "Move"];

    return (
        <div style={{ width: "60px", backgroundColor: "#2e2e2e", color: "white", padding: "10px" }}>
            {tools.map((tool) => (
                <div
                    key={tool}
                    style={{
                        margin: "15px 0",
                        textAlign: "center",
                        cursor: "pointer",
                        border: "1px solid #555",
                        borderRadius: "5px",
                        padding: "5px",
                    }}
                >
                    {tool}
                </div>
            ))}
        </div>
    );
};

export default Toolbar;
