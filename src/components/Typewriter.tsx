import { useEffect, useRef, useState } from "react";
import "../styles/components/Typewriter.sass";
import { Language } from "../interfaces/Languages.interface";

type TypewriterProps = {
  header1: string;
  header2: string;
  header3: string;
  language: Language;
};

export default function Typewriter({
  header1,
  header2,
  header3,
  language,
}: TypewriterProps) {
  const [firstText, setFirstText] = useState("");
  const [secondText, setSecondText] = useState("");
  const [thirdText, setThirdText] = useState("");

  useEffect(() => {
    if (thirdText !== "") {
      setFirstText(header1);
      setSecondText(header2);
      setThirdText(header3);
    }
  }, [language]);

  const timeouts = useRef<number[]>([]);

  useEffect(() => {
    const typeText = (
      text: string,
      setText: React.Dispatch<React.SetStateAction<string>>,
      delay: number
    ) => {
      text.split("").forEach((letter, index) => {
        const timeoutId = window.setTimeout(() => {
          setText((prevText) => prevText + letter);
        }, delay * index);
        timeouts.current.push(timeoutId);
      });
      return delay * text.length;
    };

    const delay1 = typeText(header1, setFirstText, 75);

    const timeout1 = window.setTimeout(() => {
      typeText(header2, setSecondText, 75);
    }, delay1 + 500);
    timeouts.current.push(timeout1);

    const timeout2 = window.setTimeout(() => {
      typeText(header3, setThirdText, 75);
    }, delay1 + 75 * header2.length + 1000);
    timeouts.current.push(timeout2);

    return () => {
      timeouts.current.forEach(clearTimeout);
      timeouts.current = [];
    };
  }, []);

  return (
    <section className="typewriter-container">
      <div className="typewriter-content">
        <span className="first-text">{firstText}</span>
        <h2 className="second-text">{secondText}</h2>
        <p className="third-text">{thirdText}</p>
      </div>
    </section>
  );
}
