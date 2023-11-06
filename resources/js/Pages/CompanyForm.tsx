import { FormEventHandler } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Company, PageProps } from "@/types";

type CompanyFormProps = {
  data: Company;
} & PageProps;

export default function CompanyForm({
  auth,
  data: savedData,
  update,
}: CompanyFormProps) {
  const { data, setData, post, put, processing, errors } = useForm(
    savedData || { name: "" }
  );
  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    update
      ? put(route("companies.update", { company_id: savedData.id }))
      : post(route("companies.store"));
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Company Form
        </h2>
      }
    >
      <Head title="Company Form" />
      <form onSubmit={onSubmit} className="max-w-7xl py-6 px-4 m-auto lg:px-8">
        <div>
          <InputLabel htmlFor="name" value="Name" />
          <TextInput
            id="name"
            type="text"
            name="name"
            value={data.name}
            className="mt-1 block w-full"
            onChange={(e) => setData("name", e.target.value)}
          />
          <InputError message={errors.name} className="mt-2" />
        </div>
        <div className="mt-8">
          <PrimaryButton disabled={processing}>Submit</PrimaryButton>
        </div>
      </form>
    </AuthenticatedLayout>
  );
}
