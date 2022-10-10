import React from "react";
import { useEffect } from "react";
import { GiSplitCross } from "react-icons/gi";
import { withAlert } from "./withProvider";

function Alerts({ alert, removeAlert }) {

    useEffect(function () {
        if (alert) {
            const stopTimer = setTimeout(removeAlert, 6 * 1000);
            return function () {
                clearTimeout(stopTimer);
            };
        }
   }, [alert])

    if (!alert) {
        return <></>;
    }
    const { message, type } = alert;
    
    let color;
    let color2;
    let textcolor;
    let textcolor2;
    let svg;
    
    if (type === "success") {
        color = "bg-green-100";
        color2 = "bg-green-300";
        textcolor = "text-green-700";
        textcolor2 = "text-black";
        svg = <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
              </svg>;
    } else if (type === "warning") {
        color = "bg-yellow-100";
        color2 = "bg-yellow-300";
        textcolor = "text-yellow-700";
         textcolor2 = "text-black";
        svg = <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-triangle" className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
               <path fill="currentColor" d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path>
              </svg>;
    } else if (type === "error") {
        color = "bg-red-100";
        color2 = "bg-red-300";
        textcolor = "text-red-700";
         textcolor2 = "text-black";
        svg = <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
               <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
              </svg>;
    }

    return (
        <>
        <div>
         <div className={"justify-between rounded-lg py-5 px-6 mb-3 bg-green-100 text-green-700 text-base flex items-center w-full " + color + "  " + textcolor} role="alert">
                    <div className="inline-flex"><div className="mt-1.5">{svg}</div><div className={"px-2 mx-1 rounded-sm py-0.5 text-center " + color2}>{type}</div>{message}</div>           
          <div className="cursor-pointer" onClick={removeAlert}><GiSplitCross /></div>
         </div>
        </div>
        </>
    );
}

export default withAlert(Alerts);