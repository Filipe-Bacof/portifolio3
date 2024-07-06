import { ReactNode } from "react";
import IconCypress from "../assets/icons/techs/IconCypress";
import IconDocker from "../assets/icons/techs/IconDocker";
import IconGit from "../assets/icons/techs/IconGit";
import IconJavascript from "../assets/icons/techs/IconJavascript";
import IconJest from "../assets/icons/techs/IconJest";
import IconMongodb from "../assets/icons/techs/IconMongodb";
import IconNextjs from "../assets/icons/techs/IconNextjs";
import IconNodejs from "../assets/icons/techs/IconNodejs";
import IconPostgresql from "../assets/icons/techs/IconPostgresql";
import IconPrisma from "../assets/icons/techs/IconPrisma";
import IconReact from "../assets/icons/techs/IconReact";
import IconSass from "../assets/icons/techs/IconSass";
import IconSolidity from "../assets/icons/techs/IconSolidity";
import IconTailwind from "../assets/icons/techs/IconTailwind";
import IconTestinglibrary from "../assets/icons/techs/IconTestinglibrary";
import IconTypescript from "../assets/icons/techs/IconTypescript";
import { Language } from "../interfaces/Languages.interface";
import { getTranslatedInformation } from "./languageFunctions";

type techObj = {
  id: string;
  img: ReactNode;
  name: string;
};

function generateArrayTechs(language: Language): techObj[] {
  const data = getTranslatedInformation(language, "projects.technologies");
  const colors = {
    cypress: "#17202C",
    docker: "#2496ED",
    git: "#F05539",
    javascript: "#F7DF1E",
    jest: "#C21325",
    mongodb: "#55AD47",
    nextjs: "#FFFFFF",
    nodejs: "#339933",
    postgresql: "#396C94",
    prisma: "#2D3748",
    react: "#81E0FF",
    sass: "#DF4B9A",
    solidity: "#363636",
    tailwindcss: "#06B6D4",
    testinglibrary: "#E33332",
    typescript: "#3178C6",
  };

  const array2 = [
    {
      id: "00",
      img: (
        <IconCypress className="image-tech" style={{ fill: colors.cypress }} />
      ),
    },
    {
      id: "01",
      img: (
        <IconDocker className="image-tech" style={{ fill: colors.docker }} />
      ),
    },
    {
      id: "02",
      img: <IconGit className="image-tech" style={{ fill: colors.git }} />,
    },
    {
      id: "03",
      img: (
        <IconJavascript
          className="image-tech"
          style={{ fill: colors.javascript }}
        />
      ),
    },
    {
      id: "04",
      img: <IconJest className="image-tech" style={{ fill: colors.jest }} />,
    },
    {
      id: "05",
      img: (
        <IconMongodb className="image-tech" style={{ fill: colors.mongodb }} />
      ),
    },
    {
      id: "06",
      img: (
        <IconNextjs className="image-tech" style={{ fill: colors.nextjs }} />
      ),
    },
    {
      id: "07",
      img: (
        <IconNodejs className="image-tech" style={{ fill: colors.nodejs }} />
      ),
    },
    {
      id: "08",
      img: (
        <IconPostgresql
          className="image-tech"
          style={{ fill: colors.postgresql }}
        />
      ),
    },
    {
      id: "09",
      img: (
        <IconPrisma className="image-tech" style={{ fill: colors.prisma }} />
      ),
    },
    {
      id: "10",
      img: <IconReact className="image-tech" style={{ fill: colors.react }} />,
    },
    {
      id: "11",
      img: <IconSass className="image-tech" style={{ fill: colors.sass }} />,
    },
    {
      id: "12",
      img: (
        <IconSolidity
          className="image-tech"
          style={{ fill: colors.solidity }}
        />
      ),
    },
    {
      id: "13",
      img: (
        <IconTailwind
          className="image-tech"
          style={{ fill: colors.tailwindcss }}
        />
      ),
    },
    {
      id: "14",
      img: (
        <IconTestinglibrary
          className="image-tech"
          style={{ fill: colors.testinglibrary }}
        />
      ),
    },
    {
      id: "15",
      img: (
        <IconTypescript
          className="image-tech"
          style={{ fill: colors.typescript }}
        />
      ),
    },
  ];

  const mergedArray = array2.map((item, index) => ({
    ...item,
    name: data[index],
  }));

  return mergedArray;
}

export { generateArrayTechs };
