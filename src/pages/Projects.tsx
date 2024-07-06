import ProjectView from "../components/ProjectView";
import { Language } from "../interfaces/Languages.interface";

type ProjectsProps = {
  language: Language;
};

export default function Projects({ language }: ProjectsProps) {
  return (
    <>
      <ProjectView language={language} />
    </>
  );
}
