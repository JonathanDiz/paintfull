import React, { useState } from "react";
import Canvas from "../components/Canvas";
import ColorPicker from "../components/ColorPicker";
import LineWidthPicker from "../components/LineWidthPicker";

const Home: React.FC = () => {
    const [color, setColor] = useState("black");
    const [lineWidth, setLineWidth] = useState(2);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Painting App</h1>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                <ColorPicker setColor={setColor} />
                <LineWidthPicker setLineWidth={setLineWidth} />
            </div>
            <Canvas color={color} lineWidth={lineWidth} />
        </div>
    );
};

export default Home;
