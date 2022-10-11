import React from "react";
import { withFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Input from "./Input";
import axios from "axios";
import withUser from "./withUser";
import withAlert from "./withAlert";

function calloginApi(values, bag) {
  axios.post("https://myeasykart.codeyogi.io/login", { email: values.email, password: values.password, })
    .then((response) => {
    const { user, token } = response.data;
        localStorage.setItem("token", token);
        console.log(bag);
        bag.props.setUser(user);
        bag.props.setAlert({type: "success", message: "Welcome you'd login successfully"});
    })
    .catch(() => {
      bag.props.setAlert({type: "error", message: "Invalid Credentials " + values.password, });
  })
  }

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string()
      .required()
      .min(6)
      .max(14)
  });

  const initialValues = {
    email: "",
      password: "",
}

export function Login({ handleSubmit, values, errors, handleChange, handleBlur }) {
  return (
    <>
      <div className="flex items-center justify-center px-2 py-10 lg:py-20 h-4/5 gradient"> 
        <form onSubmit={handleSubmit} className="w-full lg:w-1/2">
          <div className="px-2 py-8 shadow-sm shadow-zinc-700 bg10">
            <h1 className="px-8 py-4 font-sans text-3xl font-semibold">
              Login
            </h1>
              <div className="flex flex-col p-4 mx-4 rounded-md">
                <div className="mt-2">
              <Input
                values={values.email}
                error={errors.email}
                onChange={handleChange}
                onBlur={handleBlur}   
                label="email"
                id="Email"
                autoComplete="email"
                name="email"
                type="email"
                className=""
                placeholder="Put your email" />

              <Input
                values={values.password}
                error={errors.password}               
                onChange={handleChange}
                onBlur={handleBlur}
                id="pass"
                label="Password"
                name="password"
                type="password"
                placeholder="Enter Password"
                className=""
                autoComplete="password"
                /></div>
                
              <div className="flex mt-4 space-x-2">
                <input id="check" type="checkbox" className="" />
                <h3>Remember me</h3>
              </div>
              <div className="flex space-x-2">
                <button
                  type="submit"
                  
                  className="p-2 px-4 mt-2 font-semibold text-white bg-green-500 rounded-sm shadow-sm disabled:bg-gray-400 shadow-zinc-900 hover:bg-green-600 disabled:cursor-not-allowed"
                >
                  Login
                </button>
                <Link title="Home" to="/page">
                  <button className="p-2 px-4 mt-2 text-lg font-semibold text-white bg-red-500 rounded-sm shadow-sm shadow-zinc-900 hover:bg-red-600">
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
          </form>
      </div>
    </>
  );
}
const FormikLogin = withFormik({ validationSchema: schema, initialValues: initialValues, handleSubmit: calloginApi })(Login);

export default withAlert(withUser(FormikLogin));

