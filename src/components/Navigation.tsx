import React from "react";
import useResponsive from "../modules/useResponsive";

const Navigation: React.FC = () => {
    const { isMobile, isTablet, isLaptop } = useResponsive();

    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                padding: isMobile ? "5px" : "15px",
                backgroundColor: "#333",
                color: "white",
            }}
        >
            <h1>App</h1>
            <ul
                style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    gap: isMobile ? "10px" : "20px",
                    listStyleType: "none",
                    margin: 0,
                    padding: 0,
                }}
            >
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Navigation;
