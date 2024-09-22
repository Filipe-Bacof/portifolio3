import { useState } from "react";
import type { Language, Project } from "../interfaces/Languages.interface";
import { getTranslatedInformation } from "../utils/languageFunctions";
import "../styles/components/ProjectView.sass";
import lokos from "../assets/projects/lokos.jpg";
import metallica from "../assets/projects/metallica.jpg";
import pokemon from "../assets/projects/pokemon.jpg";
import task from "../assets/projects/task.jpg";
import gptClone from "../assets/projects/gpt-clone.jpg";
import movies from "../assets/projects/movies.jpg";
import esports from "../assets/projects/esports.jpg";
import Tooltip from "../components/Tooltip";
import { BorderPhoto } from "./BorderPhoto";
import ArrowsAndTitle from "./ArrowsAndTitle";

type ProjectViewProps = {
  language: Language;
};

export default function ProjectView({ language }: ProjectViewProps) {
  const [selected, setSelected] = useState<number>(0);
  const datapics = [lokos, metallica, pokemon, task, gptClone, movies, esports];
  const deploys = [
    "https://lokosdbira.com.br/",
    "https://metallica-api.onrender.com/song/random",
    "https://pokedex-bacof.vercel.app/",
    "https://github.com/Filipe-Bacof/olhar180-backend-desafio",
    "https://bacof-chat-gpt-clone.vercel.app/",
    "https://movies-lib-bacof.vercel.app/",
    "https://filipe-bacof.github.io/Musicas-Bacof/",
  ];
  const repos = [
    "https://github.com/thinkolab",
    "https://github.com/Filipe-Bacof/metallica-api",
    "https://github.com/Filipe-Bacof/pokedex-inb",
    "https://github.com/Filipe-Bacof/olhar180-backend-desafio",
    "https://github.com/Filipe-Bacof/Chat-GPT-Clone",
    "https://github.com/Filipe-Bacof/movies_lib",
    "https://github.com/Filipe-Bacof/Musicas-Bacof",
  ];

  const data: Project[] = getTranslatedInformation(
    language,
    "projects.projects"
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
    <div className="projects-content">
      <div className="main-img">
        <BorderPhoto
          href={deploys[selected]}
          src={datapics[selected]}
          alt={getTranslatedInformation(language, "projects.buttons.deploy")}
          side="bottom"
          text={getTranslatedInformation(language, "projects.buttons.deploy")}
        />
      </div>
      <ArrowsAndTitle
        action={handleSelected}
        lenght={data.length}
        selected={selected}
      >
        <Tooltip
          side="bottom"
          text={getTranslatedInformation(language, "projects.buttons.repo")}
        >
          <a
            href={repos[selected]}
            target="_blank"
            className="project-title"
            rel="noreferrer"
          >
            {data[selected].title}
          </a>
        </Tooltip>
      </ArrowsAndTitle>
      <div className="project-description-content">
        <p className="project-description">{data[selected].description1}</p>
        <p className="project-description">{data[selected].description2}</p>
      </div>
    </div>
  );
}
