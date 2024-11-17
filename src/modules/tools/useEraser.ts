import { useEffect, useRef } from "react";

const useEraser = (canvas: HTMLCanvasElement | null) => {
    const isErasing = useRef(false);

    const startErasing = (event: MouseEvent) => {
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        isErasing.current = true;
        ctx.globalCompositeOperation = "destination-out"; // Borra en lugar de dibujar
        ctx.beginPath();
        ctx.moveTo(event.offsetX, event.offsetY);
    };

    const erase = (event: MouseEvent) => {
        if (!isErasing.current || !canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
    };

    const stopErasing = () => {
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        isErasing.current = false;
        ctx.closePath();
        ctx.globalCompositeOperation = "source-over"; // Vuelve a modo normal
    };

    useEffect(() => {
        if (!canvas) return;

        canvas.addEventListener("mousedown", startErasing);
        canvas.addEventListener("mousemove", erase);
        canvas.addEventListener("mouseup", stopErasing);
        canvas.addEventListener("mouseleave", stopErasing);

        return () => {
            canvas.removeEventListener("mousedown", startErasing);
            canvas.removeEventListener("mousemove", erase);
            canvas.removeEventListener("mouseup", stopErasing);
            canvas.removeEventListener("mouseleave", stopErasing);
        };
    }, [canvas]);

    return {};
};

export default useEraser;
