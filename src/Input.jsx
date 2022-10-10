import { useField } from "formik";
import React from "react";

function Input({ name, label, id, className, ...rest }) {
    
    const field = useField(name);

    const [data, meta] = field;

    const { onBlur, onChange } = data;
    const { error, touched } = meta;

    let borderClass = "border-b-2 border-black focus:outline-none border-t-hidden border-r-hidden border-l-hidden";

    if (error && touched) {
        borderClass = "border-red-500 border-b-2 border-t-hidden border-l-hidden focus:outline-none border-r-hidden outline-0";
    }

    return(
        <>
        <div>
              <div className="flex flex-col">
                <div className="flex space-x-1">
                  <label htmlFor={id} className="">
                    {label}
                  </label>
                  <h1 className="text-red-500">*</h1>
                </div>
                <input
                 id={id}
                 onChange={onChange}
                 onBlur={onBlur}
                 name={name}
                  className={ "place p-2 rounded-sm focus:z-10 bg-transparent " + className + " " + borderClass } {...rest}
                />
                {touched && error && (
                  <div className="font-semibold text-red-500">
                    {error}
                  </div>
                )}
              </div>
        </div>
        </>
    );
}
export default Input;