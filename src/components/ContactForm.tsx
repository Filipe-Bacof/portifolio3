import { FormEvent, useEffect, useState } from "react";
import { Language } from "../interfaces/Languages.interface";
import { getTranslatedInformation } from "../utils/languageFunctions";
import InputShrink from "./InputShrink";
import "../styles/components/ContactForm.sass";

type ContactFormProps = {
  language: Language;
};

export default function ContactForm({ language }: ContactFormProps) {
  const [status, setStatus] = useState(0);
  const [text, setText] = useState(
    getTranslatedInformation(language, "contact.sendButton")
  );
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    setText(setTextByStatusAndLanguage());
  }, [status, language]);

  function setTextByStatusAndLanguage() {
    switch (status) {
      case 0:
        return getTranslatedInformation(language, "contact.sendButton");
      case 1:
        return getTranslatedInformation(language, "contact.loading");
      case 2:
        return getTranslatedInformation(language, "contact.error");
      case 3:
        return getTranslatedInformation(language, "contact.success");
      default:
        return "";
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(1);
    setIsSending(true);

    const { name, email, phone, subject, message }: any = e.currentTarget;
    const details = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      subject: subject.value,
      message: message.value,
    };

    try {
      await fetch(import.meta.env.VITE_CONTACT_FORM_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });

      setStatus(3);
      setIsSending(false);
    } catch (error) {
      console.error(error);
      setStatus(2);
      setIsSending(false);
    }
  };

  const getButtonClass = () => {
    switch (status) {
      case 1:
        return "sending";
      case 2:
        return "error";
      case 3:
        return "success";
      default:
        return "";
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-content">
      <InputShrink
        id="name"
        placeholder={`${getTranslatedInformation(
          language,
          "contact.nameField"
        )} (${getTranslatedInformation(language, "contact.optional")})`}
        required={false}
        disabled={isSending}
      />
      <InputShrink
        id="email"
        placeholder={`${getTranslatedInformation(
          language,
          "contact.emailField"
        )} (${getTranslatedInformation(language, "contact.optional")})`}
        required={false}
        disabled={isSending}
      />
      <InputShrink
        id="phone"
        placeholder={`${getTranslatedInformation(
          language,
          "contact.phoneField"
        )} (${getTranslatedInformation(language, "contact.optional")})`}
        required={false}
        disabled={isSending}
      />
      <InputShrink
        id="subject"
        placeholder={`${getTranslatedInformation(
          language,
          "contact.subjectField"
        )} (${getTranslatedInformation(language, "contact.optional")})`}
        required={false}
        disabled={isSending}
      />
      <InputShrink
        id="message"
        placeholder={`${getTranslatedInformation(
          language,
          "contact.messageLabel"
        )} (${getTranslatedInformation(language, "contact.required")})`}
        required={true}
        bigger
        disabled={isSending}
      />
      <button
        type="submit"
        className={`form-button ${getButtonClass()}`}
        disabled={isSending}
      >
        {text}
      </button>
    </form>
  );
}
