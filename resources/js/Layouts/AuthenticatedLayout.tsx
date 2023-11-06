import { useState, PropsWithChildren, ReactNode } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import { User } from "@/types";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Authenticated({
  header,
  children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="shrink-0 flex items-center">
                <Link href="/">
                  <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                </Link>
              </div>

              <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                <NavLink
                  href={route("companies.index")}
                  active={route().current("companies.index")}
                >
                  Company
                </NavLink>
              </div>
              <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                <NavLink
                  href={route("jobs.index")}
                  active={route().current("jobs.index")}
                >
                  Jobs
                </NavLink>
              </div>
            </div>
            <div className="hidden sm:flex sm:items-center sm:ml-6">
              <div className="ml-3 relative">
                <span className="inline-flex rounded-md">
                  <PrimaryButton>
                    <NavLink
                      href={route("add-company")}
                      active={false}
                      className="text-white"
                    >
                      Add Company
                    </NavLink>
                  </PrimaryButton>
                </span>
              </div>
              <div className="ml-3 relative">
                <span className="inline-flex rounded-md">
                  <PrimaryButton>
                    <NavLink
                      href={route("jobs.create")}
                      active={false}
                      className="text-white"
                    >
                      Add Job
                    </NavLink>
                  </PrimaryButton>
                </span>
              </div>
              <div className="ml-3 relative">
                <span className="inline-flex rounded-md">
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white "
                  >
                    Admin
                  </button>
                </span>
              </div>
            </div>

            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() =>
                  setShowingNavigationDropdown(
                    (previousState) => !previousState
                  )
                }
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    className={
                      !showingNavigationDropdown ? "inline-flex" : "hidden"
                    }
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path
                    className={
                      showingNavigationDropdown ? "inline-flex" : "hidden"
                    }
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className={
            (showingNavigationDropdown ? "block" : "hidden") + " sm:hidden"
          }
        >
          <div className="pt-2 pb-3 space-y-1">
            <ResponsiveNavLink
              href={route("companies.index")}
              active={route().current("companies.index")}
            >
              Company
            </ResponsiveNavLink>
            <ResponsiveNavLink
              href={route("jobs.index")}
              active={route().current("jobs.index")}
            >
              Jobs
            </ResponsiveNavLink>
          </div>

          <div className="pt-4 pb-1 border-t border-gray-200">
            <div className="px-4">
              <div className="font-medium text-base text-gray-800">Admin</div>
            </div>
          </div>
          <div className="pt-4 pb-1 border-t border-gray-200">
            <div className="px-4">
              <PrimaryButton>
                <NavLink
                  href={route("add-company")}
                  active={false}
                  className="text-white !p-0 text-sm hover:text-white hover:border-none focus:text-white focus:border-none"
                >
                  Add Company
                </NavLink>
              </PrimaryButton>
            </div>
          </div>
          <div className="pt-4 pb-1 border-t border-gray-200">
            <div className="px-4">
              <PrimaryButton>
                <NavLink
                  href={route("jobs.create")}
                  active={false}
                  className="text-white !p-0 text-sm hover:text-white hover:border-none focus:text-white focus:border-none"
                >
                  Add Job
                </NavLink>
              </PrimaryButton>
            </div>
          </div>
        </div>
      </nav>

      {header && (
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            {header}
          </div>
        </header>
      )}

      <main>{children}</main>
    </div>
  );
}
