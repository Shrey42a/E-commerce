import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import Input from "./Input";
import * as Yup from "yup";

function Forget() {
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
      <div className="flex items-center justify-center py-28 h-max bg-[url(https://images.wallpaperscraft.com/image/single/question_marks_figures_3d_112755_3840x2160.jpg)]">
        <Formik
          initialValues={initialValues}
          validateOnMount
          validationSchema={schema}
          onSubmit={calloginApi}
        >
        <Form className="w-full lg:w-1/2">
          <div className="bg10 py-8 px-2">
            <div className="rounded-md mx-4 p-4">
              <h2>
                Lost your password? Please enter your username or email address.
                You will receive a link to create a new password via email.
              </h2>
              
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="bg-slate-300 p-2 bx rounded-sm shadow-sm shadow-zinc-700"
                />
              <div className="flex mt-4 space-x-2">
                <button
                  className="bg-red-600 disabled:bg-red-400 disabled:cursor-not-allowed rounded-sm p-2 px-4 font-semibold text-white mt-2"
                >
                  Reset Password
                </button>
                <Link to="/login">
                  <button className="rounded-sm bg-red-600 text-lg p-2 px-4 font-semibold text-white mt-2">
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
