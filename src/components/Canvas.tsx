import React, { useRef, useEffect } from "react";

const Canvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext("2d");
            if (context) {
                context.fillStyle = "white";
                context.fillRect(0, 0, canvas.width, canvas.height);
            }
        }
    }, []);

    return (
        <canvas
            ref={canvasRef}
            width={800}
            height={600}
            style={{
                border: "1px solid black",
                backgroundColor: "white",
                cursor: "crosshair",
            }}
        />
    );
};

export default Canvas;
