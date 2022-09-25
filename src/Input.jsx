import { useField } from "formik";
import React from "react";

function Input({ name, label, id, className, ...rest }) {
    
    const field = useField(name);

    const [data, meta] = field;

    const { value, onBlur, onChange } = data;
    const { error, touched } = meta;

    let borderClass = "border-neutral-300 focus:outline-lime-400";

    if (error && touched) {
        borderClass = "border-red-500 border-2";
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
                 value={value}
                 onChange={onChange}
                 onBlur={onBlur}
                 name={name}
                  className={ "p-2 rounded-sm focus:ring-lime-400 focus:outline-none focus:z-10 bg-slate-300 bx " + className + " " + borderClass } {...rest}
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