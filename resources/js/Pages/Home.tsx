import { Head } from "@inertiajs/react";
import { JobReturnedType } from "@/types";
import { useEffect, useState } from "react";

type HomeProps = {
  data: { data: JobReturnedType[] };
};

export default function Home({ data }: HomeProps) {
  const { data: jobs } = data;
  const [currJob, setCurrJob] = useState(jobs[0]);

  const onJobClick = (job: JobReturnedType) => () => {
    setCurrJob(job);
  };

  return (
    <div className="flex just-center items-center flex-col p-8 bg-slate-500 min-w-full min-h-screen">
      <Head title="Home" />
      <h1 className="text-5xl">Wise Job</h1>

      <section className="grid grid-cols-6">
        <div className="col-start-1 col-end-2 ">
          {jobs.map((job) => (
            <div
              key={job.id}
              onClick={onJobClick(job)}
              className="bg-white py-2 px-4 rounded-sm group hover:cursor-pointer mt-6"
            >
              <div className="group-hover:underline">{job.role}</div>
              <div className="italic">
                {job.company.name} | {job.location}
              </div>
              <div className="italic">
                ${job.min_salary} - ${job.max_salary}
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-4 ml-8 bg-white py-2 px-4 rounded-sm w-full h-full mt-6">
          <div>{currJob.role}</div>
          <div className="italic">
            {currJob.company.name} | {currJob.location}
          </div>
          <div className="italic">
            ${currJob.min_salary} - ${currJob.max_salary} | $
            {currJob.remote ? "Remote" : "In-Person"}
          </div>
          <div>{currJob.descriptions}</div>
        </div>
      </section>
    </div>
  );
}
