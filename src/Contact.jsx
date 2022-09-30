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

function Contact({handleSubmit, handleBlur, values, touched, handleChange, errors}) {
    return (
        <>
           <div name="contact" className="w-full h-screen bg-center bg5 flex justify-center items-center p-4">
             <form onSubmit={handleSubmit} className="flex flex-col max-w-[600px] bg10 p-4 w-full">
              <div className="pb-8">
                <p className="inline text-4xl font-bold text-gray-600 border-b-4 border-pink-600">Contact</p>
                <p className="py-4 text-lg text-gray-700"> This is what im talking about an email - shreykumar55242@gmail.com</p>
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
                className=""
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
                className=""
                placeholder="Put your email" />
                <textarea className="bg-transparent border border-black mt-2 p-2" name="message" rows="10" placeholder="Message"></textarea>
                <button className="flex items-center px-4 py-3 mx-auto my-8 text-white border-2 bg20 hover:border-fuchsia-600">Let's Collaborate</button>
             </form>
            </div>
        </>
    );
}
const myHoc = withFormik({ validationSchema: schema, initialValues: initialValues, handleSubmit: callContactApi });
const EasyContact = myHoc(Contact);
export default EasyContact;