import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Modal.css";

const Modal = (props) => {
    const { t } = useTranslation();
    const modalRef = useRef();

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                handleCloseModal();
            }
        };

        const scrollToResume = () => {
            const resumeComponent = document.getElementById("resume");
            resumeComponent.scrollIntoView({ behavior: "smooth" });
        };

        const handleMouseLeaveResume = () => {
            handleCloseModal();
        };

        document.addEventListener("mousedown", handleOutsideClick);

        if (props.active) {
            scrollToResume();
            document.body.style.overflow = "hidden";
        }

        const resumeComponent = document.getElementById("resume");
        resumeComponent.addEventListener("mouseleave", handleMouseLeaveResume);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            document.body.style.overflow = "auto";
            resumeComponent.removeEventListener("mouseleave", handleMouseLeaveResume);
        };
    }, [props]);

    const handleCloseModal = () => {
        props.onClose();
        document.body.style.overflow = "auto";
    };

    const handleDownloadRecommendation = () => {
        const cvPath = `${process.env.PUBLIC_URL}/RecommendationLetter.pdf`;

        const link = document.createElement("a");
        link.href = cvPath;
        link.download = "RecommendationLetter.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={`overlay ${props.active ? "active" : ""}`}>
            <div className={`modal ${props.active ? "active" : ""}`} ref={modalRef}>
                <span className="close" onClick={handleCloseModal}>&times;</span>
                <h2 className="company-name">{props.company}</h2>
                <p className="job-title">{t(props.title)}</p>
                <p className="job-duration">{props.year}</p>
                <p className="job-description">
                    <span className="label">{t("modal.jobDescriptionLabel")}:</span> {props.job}
                </p>
                <p className="achievements">
                    <span className="label">{t("modal.achievementsLabel")}:</span> {props.achievements}
                </p>
                <div className="modal-scrollable-content">
                    <p className="skills">
                        <span className="label">{t("modal.skillsLabel")}:</span> {props.skills}
                    </p>
                </div>
                {props.id === 6 && (
                    <button className="download-recommendation" onClick={handleDownloadRecommendation}>
                        {t("modal.downloadRecommendation")}
                    </button>
                )}
            </div>
        </div>
    );    
}

export default Modal;
