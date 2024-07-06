import ProjectView from "../components/ProjectView";
import Technologies from "../components/Technologies";
import { Language } from "../interfaces/Languages.interface";

type ProjectsProps = {
  language: Language;
};

export default function Projects({ language }: ProjectsProps) {
  return (
    <>
      <ProjectView language={language} />
      <Technologies language={language} />
    </>
  );
}
