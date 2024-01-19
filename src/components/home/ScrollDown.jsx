import React from "react";

export const ScrollDown = ({ t }) => {
    return (
        <div className="scroll_down">
            <a href="#about" className="mouse_wrapper">
                <span className="home_scroll-name">{t("scrollDown")}</span>
                <span className="mouse">
                    <span className="wheel"></span>
                </span>
            </a>
        </div>
    )
}