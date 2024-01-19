import React from "react";
import { useTranslation } from "react-i18next";

const CardEducation = (props) => {
    const { t } = useTranslation();

    return (
        <div className="timeline_item">
            <i className={props.icon}></i>
            <span className="timeline_date">{props.year}</span>
            <h3 className="timeline_title">{t(props.title)}</h3>
            <p className="timeline_text">{t(props.desc)}</p>
            <a href={props.info} className="more_information" target="_blank" rel="noopener noreferrer">
                {t("card.seeMore")}
            </a>
        </div>
    );
}

export default CardEducation;