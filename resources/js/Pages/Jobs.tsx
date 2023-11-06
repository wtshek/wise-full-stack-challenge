import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps, JobReturnedType } from "@/types";
import { JobsTable, jobTableColumns } from "@/Components/Tables/JobsTable";

type JobsProps = {
  data: { data: JobReturnedType[] };
} & PageProps;

export default function Jobs({ auth, data }: JobsProps) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Jobs
        </h2>
      }
    >
      <Head title="Dashboard" />
      <div className="max-w-7xl py-6 px-4 m-auto">
        <JobsTable data={data} columns={jobTableColumns} />
      </div>
    </AuthenticatedLayout>
  );
}
