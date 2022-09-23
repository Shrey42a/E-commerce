import React, { memo } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

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

  const {
    handleSubmit,
    values,
    handleChange,
    resetForm,
    errors,
    handleBlur,
    touched,
    isValid,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      phone: "",
      name: "",
      confirmPassword: "",
    },
    onSubmit: calloginApi,
    validationSchema: schema,
  });
  return (
    <>
      <div className="flex items-center justify-center py-20 h-4/5 bg-[url(https://images.wallpaperscraft.com/image/single/question_marks_figures_3d_112755_3840x2160.jpg)]">
        <form onSubmit={handleSubmit} className="w-full lg:w-1/2">
          <div className="px-2 py-8 bg10">
            <h1 className="px-8 py-4 font-sans text-3xl font-semibold">
              Sign Up
            </h1>
            <div className="p-4 mx-4 rounded-md">
              <div className="flex flex-col">
                <div className="flex space-x-1">
                  <label htmlFor="name" className="">
                    Name
                  </label>
                  <h1 className="text-red-500">*</h1>
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                  placeholder="Enter your name"
                  autoComplete="name"
                  className="p-2 rounded-sm shadow-sm bg-slate-300 bx shadow-zinc-700"
                />
                {touched.name && errors.name && (
                  <div className="font-semibold text-red-500">
                    {errors.name}
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <div className="flex space-x-1">
                  <label htmlFor="phone" className="">
                    Phone number
                  </label>
                  <h1 className="text-red-500">*</h1>
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phone}
                  placeholder="Enter your phone number"
                  autoComplete="phone"
                  className="p-2 rounded-sm shadow-sm bg-slate-300 bx shadow-zinc-700"
                />
                {touched.phone && errors.phone && (
                  <div className="font-semibold text-red-500">
                    {errors.phone}
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <div className="flex space-x-1">
                  <label htmlFor="email" className="">
                    Email
                  </label>
                  <h1 className="text-red-500">*</h1>
                </div>
                <input
                  id="email-address"
                  onBlur={handleBlur}
                  name="email"
                  type="email"
                  required
                  onChange={handleChange}
                  value={values.email}
                  placeholder="Put your email"
                  autoComplete="email"
                  className="p-2 rounded-sm shadow-sm bg-slate-300 bx shadow-zinc-700"
                />
                {touched.email && errors.email && (
                  <div className="font-semibold text-red-500">
                    {errors.email}
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <div className="flex space-x-1">
                  <label htmlFor="pass" className="">
                    Create password
                  </label>
                  <h1 className="text-red-500">*</h1>
                </div>
                <input
                  id="pass"
                  name="password"
                  type="password"
                  required
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  placeholder="Password"
                  autoComplete="password"
                  className="p-2 rounded-sm shadow-sm bg-slate-300 bx shadow-zinc-700"
                />
                {touched.password && errors.password && (
                  <div className="font-semibold text-red-500">
                    {errors.password}
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <div className="flex space-x-1">
                  <label htmlFor="ConfirmPassword" className="">
                    Confirm password
                  </label>
                  <h1 className="text-red-500">*</h1>
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.confirmPassword}
                  placeholder="Password"
                  autoComplete="password"
                  className="p-2 rounded-sm shadow-sm bg-slate-300 bx shadow-zinc-700"
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <div className="font-semibold text-red-500">
                    {errors.confirmPassword}
                  </div>
                )}
              </div>

              <div className="flex mt-4 space-x-2">
                <input id="check" type="checkbox" className="" />
                <h3>Remember me</h3>
              </div>
              <div className="flex space-x-2">
                <button
                  disabled={!isValid}
                  type="submit"
                  className="p-2 px-4 mt-2 font-semibold text-white bg-red-600 rounded-sm disabled:bg-red-400 disabled:cursor-not-allowed"
                >
                  Sign Up
                </button>
                <button
                  onClick={resetForm}
                  type="button"
                  className="p-2 px-4 mt-2 font-semibold text-white bg-red-600 rounded-sm hover:bg-red-700"
                >
                  Reset
                </button>
                <Link to="/page">
                  <button className="px-4 py-2 mt-2 text-lg font-semibold text-white bg-red-600 rounded-sm">
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
        </form>
      </div>
    </>
  );
}
const BetterSignup = memo(Signup);
export default BetterSignup;
