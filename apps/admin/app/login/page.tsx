"use client";
import React from "react";
import { useRouter } from "next/navigation";

import Spinner from "../components/Spinner/Spinner";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import FormGroup from "../components/Form/FormGroup";
import { checkRequiredAndErrs, handleErrors, handleSuccess } from "../_helpers/web/formatters";
import { addToCache, requestHandler } from "../_helpers/web/requestHandler";
import { Toaster } from "react-hot-toast";
import Link from "next/link";
import LoginPageLayout from "../components/__Layouts/loginpagelayout";

const defaultModel = {
  email: "",
  password: "",
};

function Login() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [model, setModel] = React.useState(defaultModel);
  const [errors, setErrors] = React.useState({} as any);

  const onSubmit = () => {
    if (!checkRequiredAndErrs(model, setErrors, errors)) return;
    setLoading(true);

    requestHandler({ type: "post", body: model, route: "auth/login" }).then((res) => {
      if (res.email) {
        addToCache("currentUser", res, true);

        if (res.orgs.length > 0) {
          addToCache(res.orgs[0].establishmentName, res.orgs[0], true);
          return router.push("/dashboard/home/" + res.orgs[0].establishmentName);
        }

        return router.push("/dashboard");
      }
      setLoading(false);

      handleErrors(res);
    });
  };

  return (
    <>
      <Toaster />
      <LoginPageLayout>
        <div className="h-full">
          <div className="flex min-h-full items-center justify-center px-4  sm:px-6 lg:px-8">
            <div className="w-full ">
              <div>
                {/* <img
              className="h-100 mx-auto w-auto"
              src={require('src/assets/Mosque2.png')}
              alt="Your Company"
            /> */}
                <h2 className="text-6xl font-bold tracking-tight text-indigo-600">Sign In.</h2>

                <FormGroup
                  className="w-full space-y-2  mt-10"
                  errors={errors}
                  setErrors={setErrors}
                  submitAction={onSubmit}
                  fields={[
                    {
                      name: "email",
                      placeholder: "Email",
                      subType: "email",
                      type: "input",
                      maxLength: 255,
                    },
                    {
                      name: "password",
                      placeholder: "Password",
                      type: "input",
                      subType: "password",
                      minLength: 8,
                      maxLength: 255,
                    },
                  ]}
                  model={model}
                  setModel={setModel}
                />
              </div>

              {/*  */}

              <div className="items-center mt-5  justify-between space-y-3">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:border-[#8F4841] focus:ring-[#8F4841]"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-black hover:text-indigo-500">
                    Password help?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={onSubmit}
                  className=" group relative  mt-5 flex w-full justify-center rounded-xl border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-800 focus:ring-offset-2"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                  </span>
                  {loading ? <Spinner className="ml-2" /> : "Sign In"}
                </button>
              </div>
              <div className="space-y-3 mt-5">
                <p className="mt-2 text-sm text-black">{`Don't have an account?`}</p>
                <Link href="/register" className="font-bold text-black underline hover:text-indigo-800" prefetch>
                  Create one now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </LoginPageLayout>
    </>
  );
}

export default Login;

// const LoginPageLayout = (props: any) => {
//   return (
//     <div className="flex h-screen items-center justify-center">
//       <div>
//         <div className="mx-auto h-full max-w-7xl justify-center  px-4 sm:px-6 lg:px-8">
//           {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
//           <div className="mx-auto my-auto h-full max-w-3xl">
//             {/* Content goes here */}
//             <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{props.children}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
