import React from "react";

interface ToolbarProps {
    setColor: (color: string) => void;
    setLineWidth: (width: number) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ setColor, setLineWidth }) => {
    return (
        <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
            <button onClick={() => setColor("black")}>Black</button>
            <button onClick={() => setColor("red")}>Red</button>
            <button onClick={() => setColor("blue")}>Blue</button>
            <button onClick={() => setLineWidth(2)}>Thin</button>
            <button onClick={() => setLineWidth(5)}>Thick</button>
        </div>
    );
};

export default Toolbar;
