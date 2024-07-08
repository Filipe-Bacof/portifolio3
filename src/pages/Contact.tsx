import ContactForm from "../components/ContactForm";
import WhatsAndOldPortifolio from "../components/WhatsAndOldPortifolio";
import { Language } from "../interfaces/Languages.interface";

type ContactProps = {
  language: Language;
};

export default function Contact({ language }: ContactProps) {
  return (
    <>
      <ContactForm language={language} />
      <WhatsAndOldPortifolio language={language} />
    </>
  );
}
