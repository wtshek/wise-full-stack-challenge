import { ColumnDef } from "@tanstack/react-table";
import PrimaryButton from "../PrimaryButton";
import DangerButton from "../DangerButton";
import { DataTable } from "./DataTable";
import NavLink from "../NavLink";
import { JobReturnedType } from "@/types";

export const jobTableColumns: ColumnDef<JobReturnedType>[] = [
  { accessorKey: "id", header: "id" },
  { accessorKey: "role", header: "Role" },
  {
    accessorKey: "company",
    header: "Company",
    cell: ({ row }) => {
      const data = row.original;
      return <div>{data.company.name}</div>;
    },
  },
  { accessorKey: "location", header: "Location" },
  { accessorKey: "remote", header: "Remote" },
  {
    accessorKey: "salaryRange",
    header: "Salary",
    cell: ({ row }) => {
      const data = row.original;

      return (
        <div>
          ${data.min_salary} - ${data.max_salary}
        </div>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const job = row.original;

      return (
        <>
          <PrimaryButton>
            <NavLink
              className="text-white hover:text-white"
              href={route("jobs.edit", {
                job_id: job.id,
              })}
              active={false}
            >
              Edit
            </NavLink>
          </PrimaryButton>
          <DangerButton className="ml-4">
            <NavLink
              className="text-white hover:text-white"
              href={route("jobs.delete", {
                job_id: job.id,
              })}
              active={false}
            >
              Delete
            </NavLink>
          </DangerButton>
        </>
      );
    },
  },
];

interface DataTableProps<TData, TValue> {
  data: { data: TData[] };
  columns: ColumnDef<TData, TValue>[];
}

export function JobsTable<TData, TValue>({
  data,
  columns,
}: DataTableProps<TData, TValue>) {
  return <DataTable columns={columns} data={data.data} />;
}
