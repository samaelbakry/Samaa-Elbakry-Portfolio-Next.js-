import { counterItems } from "@/constants";
import React from "react";
import CountUp from 'react-countup';


const AnimatedCounter = () => {
  return (
    <>
      <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
        <div className="mx-auto grid-4-cols">
          {counterItems.map((item , index) => (
            <div key={index} className="bg-zinc-900 p-10 rounded-xl flex flex-col justify-center">
              <div key={counterItems.label} className="counter-number text-5xl text-white mb-2 font-bold" >
                <CountUp end={item.value} suffix={item.suffix}/>
              </div>
              <div className="text-lg text-white">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </>
  );
};

export default AnimatedCounter;

