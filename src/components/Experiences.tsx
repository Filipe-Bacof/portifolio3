import { useState } from "react";
import IconBxsLeftArrow from "../assets/icons/IconBxsLeftArrow";
import IconBxsRightArrow from "../assets/icons/IconBxsRightArrow";
import { Job, Language } from "../interfaces/Languages.interface";
import { getTranslatedInformation } from "../utils/languageFunctions";

import vidaia from "../assets/jobs/vidaia.jpg";
import prestativ from "../assets/jobs/prestativ.jpg";
import datametrica from "../assets/jobs/datametrica.jpg";
import tracktus from "../assets/jobs/tracktus.jpg";
import JobCard from "./JobCard";

type ExperienciesProps = {
  language: Language;
};

export default function Experiences({ language }: ExperienciesProps) {
  const [selected, setSelected] = useState<number>(0);
  const dataPics = [vidaia, prestativ, datametrica, tracktus];
  const data: Job[] = getTranslatedInformation(
    language,
    "career.experiences.jobs"
  );

  const handleSelected = (action: "increment" | "decrement") => {
    if (action === "increment") {
      const nextPage = selected + 1 <= data.length ? selected + 1 : data.length;
      setSelected(nextPage);
    } else if (action === "decrement") {
      const prevPage = selected - 1 >= 0 ? selected - 1 : 0;
      setSelected(prevPage);
    }
  };
  return (
    <>
      <div>
        <IconBxsLeftArrow
          className={`footer-icon ${selected === 0 ? "disabled" : "able"}`}
          onClick={() => handleSelected("decrement")}
        />
        <h3>
          {getTranslatedInformation(language, "career.experiences.title")}
        </h3>
        <IconBxsRightArrow
          className={`footer-icon ${
            selected === data.length ? "disabled" : "able"
          }`}
          onClick={() => handleSelected("increment")}
        />
      </div>
      {/* {data.map((job, index) => (
        <JobCard key={index} data={job} dataPic={dataPics[index]} />
      ))} */}
      <JobCard data={data[selected]} dataPic={dataPics[selected]} />
    </>
  );
}
