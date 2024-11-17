import React, { useRef } from "react";
import ToolsSidebarLayout from "../theme/ToolsSidebarLayout";
import Pencil from "./tools/Pencil";
import Eraser from "./tools/Eraser";

const SidebarContent = () => {
    return (
        <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
                <button>Pencil</button>
            </li>
            <li>
                <button>Eraser</button>
            </li>
        </ul>
    );
};

const ToolsContent = ({ canvasRef }: { canvasRef: React.RefObject<HTMLCanvasElement> }) => {
    return (
        <div>
            <h1>Drawing Tools</h1>
            <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
                {/* Renderiza las herramientas */}
                <Pencil canvas={canvasRef.current} />
                <Eraser canvas={canvasRef.current} />
            </div>
        </div>
    );
};

const Canvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    return (
        <ToolsSidebarLayout
            sidebar={<SidebarContent />}
            tools={<ToolsContent canvasRef={canvasRef} />}
        >
            <canvas ref={canvasRef} width={800} height={600} style={{ border: "1px solid black" }} />
        </ToolsSidebarLayout>
    );
};

export default Canvas;
