import React from "react";
import usePencil from "../../modules/tools/usePencil";

interface PencilProps {
    canvas: HTMLCanvasElement | null;
}

const Pencil: React.FC<PencilProps> = ({ canvas }) => {
    usePencil(canvas); // Llamamos al hook para gestionar el dibujo

    return <button>Pencil</button>; // Botón que activa la herramienta Pencil
};

export default Pencil;
