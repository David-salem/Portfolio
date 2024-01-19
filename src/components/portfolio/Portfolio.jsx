import React, { useState } from "react";
import "./Portfolio.css";
import Menu from "./Menu";

export const Portfolio = ({ t }) => {
    const [items, setItems] = useState(Menu);

    const filterItem = (categoryItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categoryItem;
        });

        setItems(updatedItems);
    };

    return (
        <section className="work container section" id="portfolio">
            <h2 className="section_title">{t("portfolioSection.title")}</h2>

            <div className="work_filters">
                <span className="work_item" onClick={() => setItems(Menu)}>
                    {t("portfolio.everything")}
                </span>
                <span className="work_item" onClick={() => filterItem("Creative")}>
                    {t("portfolio.creative")}
                </span>
                <span className="work_item" onClick={() => filterItem("Art")}>
                    {t("portfolio.art")}
                </span>
                <span className="work_item" onClick={() => filterItem("Design")}>
                    {t("portfolio.design")}
                </span>
                <span className="work_item" onClick={() => filterItem("Branding")}>
                    {t("portfolio.branding")}
                </span>
            </div>

            <div className="work_container grid">
                {items.map((elem) => {
                    const { id, image, title, category } = elem;
                    return (
                        <div className="work_card" key={id}>
                            <div className="work_thumbnail">
                                <img src={image} alt="" className="work_img" />
                                <div className="work_mask"></div>
                            </div>

                            <span className="work_category">{category}</span>
                            <h3 className="work_title">{t(title)}</h3>
                            <a href="#" className="work_button">
                                <i className="icon-link work_button-icon"></i>
                            </a>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};