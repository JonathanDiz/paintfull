import React from "react";

interface LineWidthPickerProps {
    setLineWidth: (width: number) => void;
}

const LineWidthPicker: React.FC<LineWidthPickerProps> = ({ setLineWidth }) => {
    const widths = [2, 5, 10, 15];

    return (
        <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
            {widths.map((width) => (
                <button
                    key={width}
                    onClick={() => setLineWidth(width)}
                    style={{
                        padding: "5px",
                        border: "1px solid black",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    {width}px
                </button>
            ))}
        </div>
    );
};

export default LineWidthPicker;
