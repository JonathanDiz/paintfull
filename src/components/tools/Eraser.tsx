import React from "react";
import useEraser from "../../modules/tools/useEraser";

interface EraserProps {
    canvas: HTMLCanvasElement | null;
}

const Eraser: React.FC<EraserProps> = ({ canvas }) => {
    useEraser(canvas);

    return <button>Eraser</button>;
};

export default Eraser;
