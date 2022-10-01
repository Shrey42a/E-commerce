import React from "react";
import 'animate.css';
import { Link } from "react-router-dom";

function About() {
    return (
    <>
      <div className="flex justify-center bg-center bg5 h-max lg:h-screen items-top lg:items-center">
        <div className="flex flex-col w-full p-2 my-20 lg:w-4/5 h-1/2 lg:h-4/5 lg:my-0 lg:flex-row bg10">
           <div className="w-full h-1/2 lg:w-1/2">
              <img className="h-auto max-w-full animate__delay-15s animate__slow animate__zoomInUp animate__animated ref" src="https://media.discordapp.net/attachments/933654325127938101/1025607932768960613/Logo4.png?width=789&height=492" alt="..."></img>          
           </div>
            <div className="flex flex-col items-center w-full h-full p-4 py-4 lg:w-1/2 lg:py-16">
             <h1 className="text-2xl font-semibold text-teal-800 underline lg:text-5xl">HI THIS IS @42 SHOPPING</h1>  
              <h2 className="py-4 text-xl font-semibold text-slate-900 lg:py-12 lg:text-4xl">Here you can search any product you can sort any product you add any product to cart you can buy any product but this is only for example. Choose wisely.</h2>    
              <Link to="/page"><button className="w-full p-2 m-2 mt-2 font-semibold text-center text-white rounded-lg hover:bg-gradient-to-tr hover:from-lime-600 hover:to-emerald-500 bg-gradient-to-tr from-lime-500 to-emerald-400 animate__delay-15s animate__slow animate__animated animate__backInUp">Go for Shopping</button></Link>  
            </div>         
        </div>
      </div>
    </>
    );
}
export default About;

