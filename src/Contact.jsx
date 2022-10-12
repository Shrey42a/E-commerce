import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import Input from "./Input";

function callContactApi(values) {
        console.log("contact info", values.email, values.name);
    }

    const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    name: Yup.string().required()
  });

    const initialValues = {
        email: "",
        name: "",
    }

function Contact({handleSubmit, handleBlur, isValid, values, touched, handleChange, errors}) {
    return (
        <>
           <div name="contact" className="flex items-center justify-center w-full h-screen p-4 bg-center bg25">
             <form onSubmit={handleSubmit} className="flex flex-col max-w-[600px] bg10 p-4 w-full">
              <div className="pb-8">
                <p className="inline text-4xl font-bold text-gray-400 border-b-4 border-pink-600">Contact</p>
                <p className="py-4 text-lg text-gray-600"> This is what im talking about an email - shreykumar55242@gmail.com</p>
              </div>
                <Input values={values.name} error={errors.name}
                touched={touched.name}
                onChange={handleChange}
                onBlur={handleBlur}   
                label="Name"
                id="name"
                autoComplete="name"
                name="name"
                type="name"
                className="text-neutral-200"
                placeholder="Enter your name" />
                <Input
                values={values.email}
                error={errors.email}
                touched={touched.email}
                onChange={handleChange}
                onBlur={handleBlur}   
                label="Email"
                id="Email"
                autoComplete="email"
                name="email"
                type="email"
                className="text-neutral-200"
                placeholder="Put your email" />
            <textarea className="p-2 mt-2 bg-transparent border border-black" name="message" rows="10" placeholder="Message"></textarea>
            <div className="flex items-center justify-center mt-2">
                <button disabled={!isValid} className="w-full text-center disabled:cursor-not-allowed lg:w-1/2 btn42">Let's Collaborate</button></div>
             </form>
            </div>
        </>
    );
}
const myHoc = withFormik({ validationSchema: schema, initialValues: initialValues, handleSubmit: callContactApi, validateOnMount: true });
const EasyContact = myHoc(Contact);
export default EasyContact;