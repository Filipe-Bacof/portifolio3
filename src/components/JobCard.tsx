import type { Job } from "../interfaces/Languages.interface";
import "../styles/components/JobCard.sass";
import { BorderPhoto } from "./BorderPhoto";

type JobCardProps = {
  data: Job;
  dataPic: string;
};

export default function JobCard({ data, dataPic }: JobCardProps) {
  return (
    <div className="job-content">
      <div className="job-section-1">
        <BorderPhoto src={dataPic} alt={data.title} small />
        <div className="job-section-2">
          <div className="job-title">
            <h4>{data.title}</h4>
            <h5>{data.role}</h5>
          </div>
          <span className="job-duration">
            {data.start} - {data.end} &#40;{data.elapsed}&#41;
          </span>
        </div>
      </div>
      <p className="job-description">{data.description}</p>
    </div>
  );
}
