import "../styles/components/Technologies.sass";
import { useState, useEffect } from "react";
import { Language } from "../interfaces/Languages.interface";
import { generateArrayTechs } from "../utils/techs";
import Tooltip from "./Tooltip";

type TechnologiesProps = {
  language: Language;
};

export default function Technologies({ language }: TechnologiesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = generateArrayTechs(language);
  const imagesPerView = 6;
  const timeInSeconds = 5;
  let timeoutId: number | null = null;

  useEffect(() => {
    const advanceImages = () => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % data.length;
        return nextIndex;
      });
    };

    timeoutId = window.setTimeout(advanceImages, timeInSeconds * 1000);

    return () => {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
    };
  }, [currentIndex, data.length]);

  const handleAdvanceImages = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % data.length;
      return nextIndex;
    });

    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = window.setTimeout(() => {
      handleAdvanceImages();
    }, timeInSeconds * 1000);
  };

  return (
    <div className="techs-content" onClick={handleAdvanceImages}>
      {[...data.slice(currentIndex), ...data.slice(0, currentIndex)]
        .slice(0, imagesPerView)
        .map((item, index) => (
          <div key={index} className="tech-item">
            <Tooltip text={item.name} side="top">
              {item.img}
            </Tooltip>
          </div>
        ))}
    </div>
  );
}
