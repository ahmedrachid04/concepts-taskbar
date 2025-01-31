import React from "react";

const IconWithText = ({ logo, label, onClick }) => {
    return (
        <div className="icon-container" onClick={onClick}>
            <img src={logo} alt={`${label} Logo`} className="icon" />
            <p className="icon-label">{label}</p>
        </div>
    );
};

export default IconWithText;
