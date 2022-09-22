import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function Forget() {
  function calloginApi(values) {
    console.log("Email", values.email);
  }

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
  });

  const {
    handleSubmit,
    values,
    handleChange,
    errors,
    handleBlur,
    touched,
    isValid,
  } = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: calloginApi,
    validationSchema: schema,
  });
  return (
    <>
      <div className="flex items-center justify-center py-28 h-max bg-[url(https://images.wallpaperscraft.com/image/single/question_marks_figures_3d_112755_3840x2160.jpg)]">
        <form onSubmit={handleSubmit} class="w-full lg:w-1/2">
          <div class="bg10 py-8 px-2">
            <div class="rounded-md mx-4 p-4">
              <h2>
                Lost your password? Please enter your username or email address.
                You will receive a link to create a new password via email.
              </h2>
              <div class="flex flex-col mt-4">
                <label class="">Username or Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  placeholder="Enter your email"
                  autoComplete="email"
                  class="bg-slate-300 p-2 bx rounded-sm shadow-sm shadow-zinc-700"
                />
                {touched.email && errors.email && (
                  <div className="font-semibold text-red-800">
                    {errors.email}
                  </div>
                )}
              </div>
              <div class="flex mt-4 space-x-2">
                <button
                  disabled={!isValid}
                  class="bg-red-600 disabled:bg-red-400 disabled:cursor-not-allowed rounded-sm p-2 px-4 font-semibold text-white mt-2"
                >
                  Reset Password
                </button>
                <Link to="/login">
                  <button class="rounded-sm bg-red-600 text-lg p-2 px-4 font-semibold text-white mt-2">
                    Cancel
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Forget;
