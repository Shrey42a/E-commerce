import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "./Input";

function Signup() {
  function calloginApi(values) {
    console.log(
      "Email",
      values.email,
      "password",
      values.password,
      "name",
      values.name,
      "phone",
      values.phone
    );
  }

  const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    phone: Yup.string().required(),
    confirmPassword: Yup.string().required().min(8).max(18).uppercase(),
    password: Yup.string()
      .required()
      .min(8)
      .max(18)
      .uppercase()
      .matches(/@/, "Must have a special character"),
  });

  
  const initialValues = {
    email: "",
    password: "",
    phone: "",
    name: "",
    confirmPassword: "",
  }
   
  return (
    <>
      <div className="flex items-center justify-center px-2 py-8 h-4/5 gradient">
        <Formik initialValues={initialValues} validateOnMount validationSchema={schema} onSubmit={calloginApi} >
        <Form className="w-full lg:w-1/2">
          <div className="px-2 py-4 shadow-sm shadow-zinc-700 bg10">
            <h1 className="px-8 py-4 font-sans text-3xl font-semibold">
              Sign Up
            </h1>
            <div className="p-4 mx-4 rounded-md">

                <Input
                  label="name"
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  autoComplete="name"
                  className="p-2 rounded-sm shadow-sm bg-slate-300 bx shadow-zinc-700"
                />
                <Input
                  id="phone"
                  label="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="Enter your phone number"
                  autoComplete="phone"
                  className="p-2 rounded-sm shadow-sm bg-slate-300 bx shadow-zinc-700"
                />
                <Input
                  id="email-address"
                  label="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Put your email"
                  autoComplete="email"
                  className="p-2 rounded-sm shadow-sm bg-slate-300 bx shadow-zinc-700"
                />
                <Input
                  label="password"
                  id="pass"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  autoComplete="password"
                  className="p-2 rounded-sm shadow-sm bg-slate-300 bx shadow-zinc-700"
                />
                <Input
                  id="confirmPassword"
                  label="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  placeholder="Password"
                  autoComplete="password"
                  className="p-2 rounded-sm shadow-sm bg-slate-300 bx shadow-zinc-700"
                />

              <div className="flex mt-4 space-x-2">
                <input id="check" type="checkbox" className="" />
                <h3>Remember me</h3>
              </div>
              <div className="flex space-x-2">
                <button
                  type="submit"
                  className="p-2 px-4 mt-2 font-semibold text-white bg-green-500 rounded-sm shadow-sm shadow-zinc-900 hover:bg-green-600 disabled:bg-red-400 disabled:cursor-not-allowed"
                >
                  Sign Up
                </button>
                <button
                  type="button"
                  className="p-2 px-4 mt-2 font-semibold text-white bg-teal-500 rounded-sm shadow-sm shadow-zinc-900 hover:bg-red-700"
                >
                  Reset
                </button>
                <Link to="/page">
                  <button className="px-4 py-2 mt-2 text-lg font-semibold text-white bg-red-600 rounded-sm shadow-sm shadow-zinc-900">
                    Cancel
                  </button>
                </Link>
              </div>
              <Link to="/login">
                <h2 className="mt-2 text-lg text-red-800">
                  Already have an account ?
                </h2>
              </Link>
            </div>
          </div>
          </Form>
          </Formik>
      </div>
    </>
  );
}
const BetterSignup = memo(Signup);
export default BetterSignup;
