import React from "react";
import 'animate.css';
import { Link } from "react-router-dom";

function About() {
    return (
    <>
      <div className="bg5 bg-center h-max lg:h-screen flex justify-center items-top lg:items-center">
        <div className="lg:w-4/5 w-full h-1/2 lg:h-4/5 flex my-20 lg:my-0 lg:flex-row flex-col p-2 bg10">
           <div className="h-1/2  w-full lg:w-1/2">
              <img className="animate__delay-15s animate__slow animate__zoomInUp animate__animated ref" src="src/Logo1.svg"></img>          
           </div>
            <div className="h-full w-full lg:w-1/2 p-4 flex py-4 lg:py-16 flex-col items-center">
             <h1 className="lg:text-5xl text-2xl underline text-teal-800 font-semibold">HI THIS IS @42 SHOPPING</h1>  
              <h2 className="text-slate-900 font-semibold text-xl py-4 lg:py-12 lg:text-4xl">Here you can search any product you can sort any product you add any product to cart you can buy any product but this is only for example. Choose wisely.</h2>    
              <Link to="/page"><button className="p-2 m-2 mt-2 text-center font-semibold text-white rounded-lg w-full hover:bg-gradient-to-tr hover:from-lime-600 hover:to-emerald-500 bg-gradient-to-tr from-lime-500 to-emerald-400 animate__delay-15s animate__slow animate__animated animate__backInUp">Go for Shopping</button></Link>  
            </div>         
        </div>
      </div>
    </>
    );
}
export default About;

