import React from "react";
import { Link } from "react-router-dom";
import { withFormik } from "formik";
import * as Yup from "yup";
import Input from "./Input";
import axios from "axios";
import withUser from "./withUser";
import withAlert from "./withAlert";


function callSignupApi(values, bag) {
    axios.post("https://myeasykart.codeyogi.io/signup", {  fullName: values.name, email: values.email, password: values.password, })
      .then((response) => {
        const { user, token } = response.data;
        localStorage.setItem("token", token);
        console.log(bag);
        bag.props.setUser(user);
        bag.props.setAlert({type: "success", message: "Welcome you'd login successfully " + values.name + "  " + values.email + "  " +  values.password});
      })
      .catch(() => {
        bag.props.setAlert({type: "warning", message: "Something went wrong"})
      });
}
  
  const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    phone: Yup.string().required(),
    confirmPassword: Yup.string().required().min(6).max(14),
    password: Yup.string()
      .required()
      .min(6)
      .max(14)
  });
  const initialValues = {
    email: "",
    password: "",
    phone: "",
    name: "",
    confirmPassword: "",
  }
export function Signup({ handleSubmit, values, isValid, errors, touched, handleChange, handleBlur }) {

  return (
    <>
      <div className="flex items-center justify-center px-2 py-8 h-4/5 gradient4">
        <form onSubmit={handleSubmit} className="w-full lg:w-1/2">
          <div className="px-2 py-4 shadow-sm shadow-zinc-700 bg10">
            <h1 className="px-8 py-4 font-sans text-3xl font-semibold">
              Sign Up
            </h1>
            <div className="p-4 mx-4 rounded-md">

              <Input
                  values={values.name}
                  error={errors.name}
                  touched={touched.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Name"
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  autoComplete="name"
                  className="p-2 rounded-sm"
                />
                <Input
                  id="phone"
                  label="Phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="Enter your phone number"
                  autoComplete="phone"
                  className="p-2 rounded-sm"
                />
              <Input
                  values={values.email}
                  error={errors.email}
                  touched={touched.email}
                  onChange={handleChange}
                  onBlur={handleBlur} 
                  id="email-address"
                  label="Email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="p-2 rounded-sm"
                />
              <Input
                  values={values.password}
                  error={errors.password}
                  touched={touched.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Password"
                  id="pass"
                  name="password"
                  type="password"
                  required
                  placeholder="Create Password"
                  autoComplete="password"
                  className="p-2 rounded-sm"
                />
                <Input
                  id="confirmPassword"
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  required
                  placeholder="Confirm Password"
                  autoComplete="password"
                  className="p-2 bg-transparent rounded-sm"
                />

              <div className="flex mt-4 space-x-2">
                <input id="check" type="checkbox" className="" />
                <h3>Remember me</h3>
              </div>
              <div className="flex space-x-2">
                <button
                  type="submit"
                  disabled={!isValid}
                  className="p-2 px-4 mt-2 font-semibold text-white bg-green-500 rounded-sm shadow-sm shadow-zinc-900 hover:bg-green-600 disabled:bg-red-400 disabled:cursor-not-allowed"
                >
                  Sign Up
                </button>
                <button
                  type="button"
                  className="p-2 px-4 mt-2 font-semibold text-white bg-teal-500 rounded-sm shadow-sm disabled:bg-gray-400 shadow-zinc-900 hover:bg-red-700"
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
          </form>
      </div>
    </>
  );
}

const EasySignup = withFormik({ validationSchema: schema, initialValues: initialValues, handleSubmit: callSignupApi, validateOnMount: true })(Signup);

export default withAlert(withUser(EasySignup));