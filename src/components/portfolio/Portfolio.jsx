import "./Portfolio.css";
import Projects from "./Swiper";

export const Portfolio = ({ t }) => {
  return (
    <section className="work container section" id="portfolio">
      <h2 className="section_title">{t("portfolioSection.title")}</h2>

      <Projects />
    </section>
  );
};
