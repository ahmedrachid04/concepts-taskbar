import React from "react";

const IconWithText = ({ logo, label, onClick, backgroundColor }) => {
    return (
        <div
            className="icon-container"
            onClick={onClick}
            style={{ backgroundColor }} // Dynamic background color
        >
            <img src={logo} alt={`${label} Logo`} className="icon" />
            <p className="icon-label">{label}</p>
        </div>
    );
};

export default IconWithText;
