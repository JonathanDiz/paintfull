type DeviceType = "mobile" | "tablet" | "laptop" | "desktop";

/**
 * Detecta el tipo de dispositivo basado en el ancho de la ventana.
 * @param width - Ancho de la ventana
 * @returns DeviceType - Tipo de dispositivo
 */
export const getDeviceType = (width: number): DeviceType => {
    if (width <= 768) {
        return "mobile";
    } else if (width > 768 && width <= 1024) {
        return "tablet";
    } else if (width > 1024 && width <= 1440) {
        return "laptop";
    } else {
        return "desktop";
    }
};
