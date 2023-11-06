import { FormEventHandler } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Company, Job, PageProps } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import Checkbox from "@/Components/Checkbox";
import { Textarea } from "@/Components/ui/textarea";

type JobFormProps = {
  companies: Company[];
  update: boolean;
  data: Job;
} & PageProps;

export default function JobForm({
  auth,
  companies,
  update,
  data: savedData,
}: JobFormProps) {
  const { data, setData, post, processing, errors, put } = useForm(
    savedData || {
      role: "",
      min_salary: 0,
      max_salary: 0,
      location: "",
      descriptions: "",
      remote: false,
      company_id: "",
    }
  );
  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    update
      ? put(route("jobs.update", { job_id: savedData.id }))
      : post(route("jobs.store"));
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Job Form
        </h2>
      }
    >
      <Head title="Company Form" />
      <form onSubmit={onSubmit} className="max-w-7xl py-6 px-4 m-auto lg:px-8">
        <div>
          <InputLabel htmlFor="role" value="Role" />
          <TextInput
            id="role"
            type="text"
            name="role"
            value={data.role}
            className="mt-1 block w-full"
            onChange={(e) => setData("role", e.target.value)}
          />
          <InputError message={errors.role} className="mt-2" />
        </div>
        <div className="mt-8">
          <InputLabel htmlFor="company" value="Company" />
          <Select
            onValueChange={(value) => {
              setData("company_id", value);
            }}
            value={String(data.company_id)}
          >
            <SelectTrigger className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm">
              <SelectValue placeholder="Company" />
            </SelectTrigger>
            <SelectContent>
              {companies.map((company) => (
                <SelectItem key={company.id} value={String(company.id)}>
                  {company.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <InputError message={errors.company_id} className="mt-2" />
        </div>
        <div className="mt-8">
          <InputLabel htmlFor="location" value="Location" />
          <TextInput
            id="location"
            type="text"
            name="location"
            value={data.location}
            className="mt-1 block w-full"
            onChange={(e) => setData("location", e.target.value)}
          />
          <InputError message={errors.location} className="mt-2" />
        </div>
        <div className="mt-8">
          <InputLabel value="Salary" />
          <div className="flex items-center mt-2">
            <InputLabel htmlFor="minSalary" value="Min:" />
            <TextInput
              className="ml-4"
              id="minSalary"
              type="number"
              name="minSalary"
              value={data.min_salary}
              onChange={(e) => setData("min_salary", Number(e.target.value))}
            />
            <InputLabel className="ml-8" htmlFor="maxSalary" value="Max:" />
            <TextInput
              className="ml-4"
              id="maxSalary"
              type="number"
              name="maxSalary"
              value={data.max_salary}
              onChange={(e) => setData("max_salary", Number(e.target.value))}
            />
          </div>
        </div>
        <div className="mt-8">
          <label className="flex items-center">
            <Checkbox
              name="remember"
              checked={data.remote}
              onChange={(e) => setData("remote", e.target.checked)}
            />
            <span className="ml-2">Remote?</span>
          </label>
        </div>
        <div className="mt-8">
          <InputLabel htmlFor="descriptions" value="Descriptions" />
          <Textarea
            placeholder="Job Description..."
            id="descriptions"
            onChange={(e) => setData("descriptions", e.target.value)}
            value={data.descriptions}
          />
        </div>
        <div className="mt-8">
          <PrimaryButton disabled={processing}>Submit</PrimaryButton>
        </div>
      </form>
    </AuthenticatedLayout>
  );
}
