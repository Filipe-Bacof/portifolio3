import { Job } from "../interfaces/Languages.interface";
import CirclePhoto from "./CirclePhoto";
import "../styles/components/JobCard.sass";

type JobCardProps = {
  data: Job;
  dataPic: string;
};

export default function JobCard({ data, dataPic }: JobCardProps) {
  return (
    <div className="job-content">
      <div className="job-section-1">
        <CirclePhoto src={dataPic} alt={data.title} small />
        <div className="job-section-2">
          <div className="job-title">
            <h4>{data.title}</h4>
            <h5>{data.role}</h5>
          </div>
          <span>
            {data.start} - {data.end}
          </span>
          <span>&#40;{data.elapsed}&#41;</span>
        </div>
      </div>
      <p>{data.description}</p>
    </div>
  );
}
