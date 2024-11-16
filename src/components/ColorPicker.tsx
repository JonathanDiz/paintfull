import React from "react";

interface ColorPickerProps {
    setColor: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ setColor }) => {
    const colors = ["black", "red", "blue", "green", "yellow", "purple"];

    return (
        <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
            {colors.map((color) => (
                <button
                    key={color}
                    onClick={() => setColor(color)}
                    style={{
                        width: "30px",
                        height: "30px",
                        backgroundColor: color,
                        border: "none",
                        borderRadius: "50%",
                        cursor: "pointer",
                    }}
                />
            ))}
        </div>
    );
};

export default ColorPicker;
