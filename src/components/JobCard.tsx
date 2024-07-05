import { Job } from "../interfaces/Languages.interface";

type JobCardProps = {
  data: Job;
  dataPic: string;
};

export default function JobCard({ data, dataPic }: JobCardProps) {
  return (
    <div className="">
      <div className="">
        <img className="" src={dataPic} alt={data.title} />
        <div className="">
          <div className="">
            <h4 className="">{data.title}</h4>
            <h5 className="">{data.role}</h5>
          </div>
          <span className="">
            {data.start} - {data.role} &#40;{data.elapsed}&#41;
          </span>
        </div>
      </div>
      <p className="">{data.description}</p>
    </div>
  );
}
