import { useEffect, useRef, useState } from "react";
import "../styles/components/Typewriter.sass";

export default function Typewriter() {
  const [firstText, setFirstText] = useState("");
  const [secondText, setSecondText] = useState("");
  const [thirdText, setThirdText] = useState("");

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

    const header1 = "Bem vindo! Eu sou";
    const header2 = "Filipe Bacof";
    const header3 = "Desenvolvedor Full-Stack";

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
        <h1 className="second-text">{secondText}</h1>
        <h2 className="third-text">{thirdText}</h2>
      </div>
    </section>
  );
}
