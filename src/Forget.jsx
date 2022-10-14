import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import Input from "./Input";
import * as Yup from "yup";

function Forget({isValid}) {
  function calloginApi(values) {
    console.log("Email", values.email);
  }

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
  });

  const
    initialValues ={
      email: "",
    }
  
  return (
    <>
      <div className="flex items-center justify-center px-2 py-28 lg:py-44 h-max gradient4">
        <Formik
          initialValues={initialValues}
          validateOnMount
          validationSchema={schema}
          onSubmit={calloginApi}
        >
        <Form className="w-full lg:w-1/2">
          <div className="px-2 py-8 shadow-sm shadow-zinc-700 bg10">
            <div className="p-4 mx-4 rounded-md">
              <h2 className="text-lg font-semibold">
                Lost your password? Please enter your username or email address.
                You will receive a link to create a new password via email.
              </h2>
              
                <Input
                  id="email"
                  name="email"
                  type="email"
                  label="Email"
                  required
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="p-2 rounded-sm"
                />
              <div className="flex flex-col mt-4 lg:space-x-2 lg:flex-row">
                  <button
                    disabled={!isValid}
                  className="p-2 px-4 mt-2 font-semibold text-white bg-green-500 rounded-sm shadow-sm shadow-zinc-900 hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Reset Password
                </button>
                <Link to="/login">
                  <button className="p-2 px-4 mt-2 text-lg font-semibold text-white bg-red-500 rounded-sm shadow-sm shadow-zinc-900 hover:bg-red-600">
                    Cancel
                  </button>
                </Link>
              </div>
            </div>
          </div>
          </Form>
          </Formik>
      </div>
    </>
  );
}
const BetterForget = memo(Forget);
export default BetterForget;
