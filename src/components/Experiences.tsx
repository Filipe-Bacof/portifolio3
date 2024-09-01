import { useState } from "react";
import { Job, Language } from "../interfaces/Languages.interface";
import { getTranslatedInformation } from "../utils/languageFunctions";
import "../styles/components/Experiences.sass";
import vidaia from "../assets/jobs/vidaia.jpg";
import prestativ from "../assets/jobs/prestativ.jpg";
import datametrica from "../assets/jobs/datametrica.jpg";
import vrana from "../assets/jobs/vrana.jpg";
import tracktus from "../assets/jobs/tracktus.jpg";
import JobCard from "./JobCard";
import ArrowsAndTitle from "./ArrowsAndTitle";

type ExperienciesProps = {
  language: Language;
};

export default function Experiences({ language }: ExperienciesProps) {
  const [selected, setSelected] = useState<number>(0);
  const dataPics = [vidaia, prestativ, datametrica, vrana, tracktus];
  const data: Job[] = getTranslatedInformation(
    language,
    "career.experiences.jobs"
  );

  const handleSelected = (action: "increment" | "decrement") => {
    if (action === "increment") {
      const nextPage = selected < data.length - 1 ? selected + 1 : selected;
      setSelected(nextPage);
    } else if (action === "decrement") {
      const prevPage = selected > 0 ? selected - 1 : selected;
      setSelected(prevPage);
    }
  };

  return (
    <>
      <ArrowsAndTitle
        action={handleSelected}
        lenght={data.length}
        selected={selected}
      >
        <h3 className="career-title">
          {getTranslatedInformation(language, "career.experiences.title")}
        </h3>
      </ArrowsAndTitle>

      {/* {data.map((job, index) => (
        <JobCard key={index} data={job} dataPic={dataPics[index]} />
      ))} */}
      <JobCard data={data[selected]} dataPic={dataPics[selected]} />
    </>
  );
}
