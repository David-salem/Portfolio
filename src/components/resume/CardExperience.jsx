import React, { useState } from "react";
import Modal from "./Modal";
import { useTranslation } from "react-i18next";

const CardExperience = (props) => {
    const { t } = useTranslation();
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="timeline_item">
            <i className={props.icon}></i>
            <span className="timeline_date">{props.year}</span>
            <h3 className="timeline_title">{props.title}</h3>
            <p className="timeline_text">{props.desc}</p>
            <button className="more_information" onClick={handleOpenModal}>{t("card.seeMore")}</button>
            {modalOpen && <Modal 
                            info={props.info} 
                            onClose={handleCloseModal} 
                            active={modalOpen}
                            company={props.company}
                            year={props.year}
                            title={props.title}
                            job={props.job}
                            achievements={props.achievements}
                            skills={props.skills}
                            id={props.id}
                          />}
        </div>
    );
}

export default CardExperience;
