import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Modal.css";

const Modal = (props) => {
    const { t } = useTranslation();
    const modalRef = useRef();

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                props.onClose();
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [props]);

    return (
        <div className={`overlay ${props.active ? "active" : ""}`}>
            <div className={`modal ${props.active ? "active" : ""}`} ref={modalRef}>
                <span className="close" onClick={props.onClose}>&times;</span>
                <h2 className="company-name">{props.company}</h2>
                <p className="job-title">{t(props.title)}</p>
                <p className="job-duration">{props.year}</p>
                <p className="job-description">
                    <span className="label">{t("modal.jobDescriptionLabel")}:</span> {props.job}
                </p>
                <p className="achievements">
                    <span className="label">{t("modal.achievementsLabel")}:</span> {props.achievements}
                </p>
                <p className="skills">
                    <span className="label">{t("modal.skillsLabel")}:</span> {props.skills}
                </p>
            </div>
        </div>
    );    
}

export default Modal;
