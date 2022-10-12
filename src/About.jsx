import React from "react";
import 'animate.css';
import { Link } from "react-router-dom";

function About() {
    return (
    <>
      <div className="flex justify-center bg-center bg25 h-max lg:h-screen items-top lg:items-center">
        <div className="flex flex-col w-full p-2 my-20 lg:w-4/5 h-1/2 lg:h-4/5 lg:my-0 lg:flex-row bg10">
            <div className="flex flex-col w-full h-full lg:w-1/2">
              <div className="w-full lg:h-4/5">
              <img className="h-auto max-w-full animate__delay__4s animate__slow animate__zoomInUp animate__animated ref" src="https://media.discordapp.net/attachments/933654325127938101/1025607932768960613/Logo4.png?width=789&height=492" alt="..."></img></div>
              <div className="flex items-center justify-center w-full h-24 lg:h-1/5">
              <img className="h-auto max-w-full animate__delay__4s animate__slow animate__zoomInUp animate__animated ref" src="https://cdn.discordapp.com/attachments/933654325127938101/1028275924665380914/Sat_8_10_2022_17_30_27.png"></img></div>
           </div>
            <div className="flex flex-col items-center w-full h-full p-4 py-4 lg:w-1/2 lg:py-16">
             <h1 className="text-2xl font-semibold text-gray-400 underline lg:text-5xl">HI THIS IS @42 SHOPPING</h1>  
              <h2 className="py-4 text-xl font-semibold text-slate-600 lg:py-12 lg:text-4xl">Here you can search any product you can sort any product you add any product to cart you can buy any product but this is only for example. Choose wisely.</h2>    
              <Link to="/page"><button className="mt-2 text-center btn42 animate__delay-15s animate__slow animate__animated animate__backInUp">Go for Shopping</button></Link>  
            </div>         
        </div>
      </div>
    </>
    );
}
export default About;

