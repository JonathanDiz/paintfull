import { useState, useEffect } from "react";
import { getDeviceType } from "../utils/responsive";

type DeviceType = "mobile" | "tablet" | "laptop" | "desktop";

interface ResponsiveSettings {
    device: DeviceType;
    isMobile: boolean;
    isTablet: boolean;
    isLaptop: boolean;
    isDesktop: boolean;
}

/**
 * Hook para gestionar la responsividad de la aplicación.
 * @returns ResponsiveSettings - Configuración actual del dispositivo
 */
const useResponsive = (): ResponsiveSettings => {
    const [device, setDevice] = useState<DeviceType>("desktop");

    const updateDevice = () => {
        const width = window.innerWidth;
        setDevice(getDeviceType(width));
    };

    useEffect(() => {
        // Detecta el dispositivo inicial
        updateDevice();

        // Escucha cambios en el tamaño de la ventana
        window.addEventListener("resize", updateDevice);

        return () => {
            window.removeEventListener("resize", updateDevice);
        };
    }, []);

    return {
        device,
        isMobile: device === "mobile",
        isTablet: device === "tablet",
        isLaptop: device === "laptop",
        isDesktop: device === "desktop",
    };
};

export default useResponsive;
