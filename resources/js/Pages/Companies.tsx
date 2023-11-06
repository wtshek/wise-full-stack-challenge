import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { CompanyReturnType, PageProps } from "@/types";
import {
  CompanyTable,
  componyTableColumns,
} from "@/Components/Tables/CompanyTable";

type CompaniesProps = {
  data: { data: CompanyReturnType[] };
} & PageProps;

export default function Companies({ auth, data }: CompaniesProps) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Company
        </h2>
      }
    >
      <Head title="Dashboard" />
      <div className="max-w-7xl py-6 px-4 m-auto">
        <CompanyTable data={data.data} columns={componyTableColumns} />
      </div>
    </AuthenticatedLayout>
  );
}
