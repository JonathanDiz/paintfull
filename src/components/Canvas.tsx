import React, { useRef, useEffect } from "react";

interface CanvasProps {
    color: string;
    lineWidth: number;
}

const Canvas: React.FC<CanvasProps> = ({ color, lineWidth }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const isDrawing = useRef(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext("2d");
            if (context) {
                context.strokeStyle = color;
                context.lineWidth = lineWidth;
                context.lineCap = "round"; // Mejora la apariencia de los trazos
            }
        }
    }, [color, lineWidth]);

    const startDrawing = (event: React.MouseEvent<HTMLCanvasElement>) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const context = canvas.getContext("2d");
        if (context) {
            context.beginPath();
            context.moveTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
            isDrawing.current = true;
        }
    };

    const draw = (event: React.MouseEvent<HTMLCanvasElement>) => {
        if (!isDrawing.current) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const context = canvas.getContext("2d");
        if (context) {
            context.lineTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
            context.stroke();
        }
    };

    const stopDrawing = () => {
        isDrawing.current = false;
    };

    return (
        <canvas
            ref={canvasRef}
            width={800}
            height={600}
            style={{ border: "1px solid black", cursor: "crosshair" }}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
        />
    );
};

export default Canvas;
