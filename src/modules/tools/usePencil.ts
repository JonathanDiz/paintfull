import { useEffect } from "react";

const usePencil = (canvas: HTMLCanvasElement | null) => {
    useEffect(() => {
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Configurar el estilo del lápiz
        ctx.lineWidth = 5; // Grosor del lápiz
        ctx.lineCap = "round"; // Estilo de línea redondeada
        ctx.strokeStyle = "black"; // Color del lápiz

        let isDrawing = false;

        const startDrawing = (e: MouseEvent) => {
            isDrawing = true;
            ctx.beginPath();
            ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        };

        const draw = (e: MouseEvent) => {
            if (!isDrawing) return;
            ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
            ctx.stroke();
        };

        const stopDrawing = () => {
            isDrawing = false;
        };

        // Agregar eventos de ratón al canvas
        canvas.addEventListener("mousedown", startDrawing);
        canvas.addEventListener("mousemove", draw);
        canvas.addEventListener("mouseup", stopDrawing);
        canvas.addEventListener("mouseleave", stopDrawing);

        // Limpiar los eventos cuando el componente se desmonte
        return () => {
            canvas.removeEventListener("mousedown", startDrawing);
            canvas.removeEventListener("mousemove", draw);
            canvas.removeEventListener("mouseup", stopDrawing);
            canvas.removeEventListener("mouseleave", stopDrawing);
        };
    }, [canvas]);
};

export default usePencil;
