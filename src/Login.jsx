import React, { memo } from "react";
import { Formik, Form, useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Input from "./Input";

function Login() {
  function calloginApi(values) {
    console.log("Email", values.email, "password", values.password);
  }

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
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
  }

  return (
    <>
      <div className="flex items-center justify-center py-20 h-4/5 bg-[url(https://images.wallpaperscraft.com/image/single/question_marks_figures_3d_112755_3840x2160.jpg)]">
        <Formik initialValues={initialValues}
          onSubmit={calloginApi}
          validationSchema={schema}
          validateOnMount >
        <Form className="w-full lg:w-1/2">
          <div className="px-2 py-8 bg10">
            <h1 className="px-8 py-4 font-sans text-3xl font-semibold">
              Login
            </h1>
            <div className="flex flex-col p-4 mx-4 rounded-md">
              <Input
                label="email"
                id="email"
                autoComplete="email"
                name="email"
                type="email"
                className=""
                placeholder="Put your email" />
                
              <Input
                id="pass"
                label="password"
                name="password"
                type="password"
                placeholder="Password"
                className=""
                autoComplete="password"
              />
             
              
              <div className="flex mt-4 space-x-2">
                <input id="check" type="checkbox" className="" />
                <h3>Remember me</h3>
              </div>
              <div className="flex space-x-2">
                <button
                  type="submit"
                  className="p-2 px-4 mt-2 font-semibold text-white bg-red-600 rounded-sm disabled:cursor-not-allowed disabled:bg-red-400"
                >
                  Login
                </button>
                <button
                  type="button"
                  className="p-2 px-4 mt-2 font-semibold text-white bg-red-600 rounded-sm"
                >
                  Reset
                </button>
                <Link title="Home" to="/page">
                  <button className="p-2 px-4 mt-2 text-lg font-semibold text-white bg-red-600 rounded-sm">
                    Cancel
                  </button>
                </Link>
              </div>
              <Link to="/forget">
                <h2 className="text-lg text-red-800">Lost your password ?</h2>
              </Link>

              <div className="flex flex-col">
                <h2 className="text-lg text-black">
                  Dont have an account ?
                  <Link to="/signup">
                    <h2 className="mr-12 text-lg text-red-800">Sing up here</h2>
                  </Link>
                </h2>
              </div>
            </div>
          </div>
          </Form>
          </Formik>
      </div>
    </>
  );
}
const BetterLogin = memo(Login);
export default BetterLogin;
