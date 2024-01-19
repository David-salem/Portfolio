import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

export const Contact = () => {
  const { t } = useTranslation();
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });
  const [disabledButton, setDisabledButton] = useState(true);
  const form = useRef();

  const handleSubmit = (e) => {
    setLoader(true);
    e.preventDefault();

    emailjs
      .sendForm("service_cn8916q", "template_6pe5cpa", form.current, "_dHKUxkDWEQ45ca8T")
      .then(() => {
        setMessage(t("contactSection.successMessage"));
        setLoader(false);
        e.target.reset();
      })
      .catch((error) => {
        setLoader(false);
        setError(error);
        e.target.reset();
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const isFormValid =
      formData.user_name.trim() !== "" &&
      formData.user_email.trim() !== "" &&
      formData.subject.trim() !== "" &&
      formData.message.trim() !== "";

    setDisabledButton(!isFormValid);
  }, [formData]);

  return (
    <section className="contact container section" id="contact">
      <h2 className="section_title">{t("contactSection.title")}</h2>

      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title">{t("contactSection.subtitle")}</h3>
          <p className="contact_details">{t("contactSection.emailMessage")}</p>
        </div>

        <form ref={form} className="contact_form" onSubmit={handleSubmit}>
          <div className="contact_form-group">
            <div className="contact_form-div">
              <input
                type="text"
                className="contact_form-input"
                placeholder={t("contactSection.placeholderName")}
                name="user_name"
                value={formData.user_name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="contact_form-div">
              <input
                type="email"
                className="contact_form-input"
                placeholder={t("contactSection.placeholderEmail")}
                name="user_email"
                value={formData.user_email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="contact_form-div">
            <input
              type="text"
              className="contact_form-input"
              placeholder={t("contactSection.placeholderSubject")}
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="contact_form-div contact_form-area">
            <textarea
              cols="30"
              rows="10"
              className="contact_form-input"
              placeholder={t("contactSection.placeholderMessage")}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          {loader ? (
            <div className="loader-contact"><CircularProgress /></div>
          ) : (
            <button className="btn btn_textarea" disabled={disabledButton}>
              {t("contactSection.buttonText")}
            </button>
          )}

          {message && <Alert severity="success" className="message-contact">{message}</Alert>}
          {error && <Alert severity="error" className="message-contact">{error}</Alert>}
        </form>
      </div>
    </section>
  );
};
