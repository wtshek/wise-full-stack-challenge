import { ColumnDef } from "@tanstack/react-table";
import PrimaryButton from "../PrimaryButton";
import DangerButton from "../DangerButton";
import { DataTable } from "./DataTable";
import { CompanyReturnType } from "@/types";
import NavLink from "../NavLink";

export const componyTableColumns: ColumnDef<CompanyReturnType>[] = [
  { accessorKey: "name", header: "Name" },
  {
    accessorKey: "numOfJobAds",
    header: "Number of Job Ads Posted",
    cell: ({ row }) => {
      const { jobs } = row.original;
      return <div>{jobs?.length}</div>;
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const company = row.original;

      return (
        <>
          <PrimaryButton>
            <NavLink
              className="text-white hover:text-white"
              href={route("companies.edit", {
                company_id: company.id,
              })}
              active={false}
            >
              Edit
            </NavLink>
          </PrimaryButton>
          <DangerButton className="ml-4">
            <NavLink
              className="text-white hover:text-white"
              href={route("companies.delete", {
                company_id: company.id,
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
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function CompanyTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  return <DataTable data={data} columns={columns} />;
}
