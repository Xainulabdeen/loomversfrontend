import React from "react";

import { motion } from "framer-motion";

const GridComponent = ({ title, description, btnclass, btnlink,btntext}) => {
  const gridItems = Array.from({ length: 49 }, (_, i) => i);
 
  return (
    <div className=" w-full h-screen overflow-hidden">
       <div className="justify-self-center w-full ">  {/* Grid Background */}
      <div className="min-h-screen grid w-full md:w-full lg:w-full   grid-cols-7 grid-rows-7  gap-0">
    
       
        {gridItems.map((item) => (
          <motion.div
            key={item}
            className=" w-full h-full bg-zinc-900 border border-zinc-600 overflow-hidden"
            initial={{ opacity: 1 }}
            whileHover={{ opacity: [1, 0.8, 0.6, 0.5] }} // Sequence of opacity changes on hover
            whileTap={{ opacity: 0.7 }} // Optional: Reduce opacity on active tap
            animate={{ opacity: 1 }} // Reset opacity when the mouse leaves
            transition={{ duration: 0.3 }} // Smooth transition duration
          />
        ))}
</div>
      </div>

      {/* Foreground Content */}
      <div className="flex justify-center justify-self-center   max-w-6xl ">
      <div className="absolute top-80  w-2/3 text-center text-white">
        <motion.h1
          className="lg:text-7xl md:text-6xl text-3xl font-bold mb-4 "
          whileHover={{ scale: 1.05 }} // Bounce effect
          transition={{ type: "inertia", stiffness: 400, damping: 10 }} // Spring bounce effect
        >
          {title}
        </motion.h1>
        <motion.p
          className="lg:text-5xl   md:text-5xl sm:text-3xl xsm:text-3xl mb-6"
          whileHover={{scale: 1.05}} // Bounce effect for description
          transition={{ type: "inertia", stiffness: 400, damping: 10 }} // Spring bounce effect
        >
          {description}
        </motion.p>
        <a href={btnlink}>
      <button
        className={`rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none ${btnclass}`}
        
      >
        {btntext}
      </button>
    </a>

      </div>
    </div>
    </div>
  );
};

export default GridComponent;

// Example usage
// <GridComponent 
//   title="Welcome to Our Site" 
//   description="This is a responsive grid background." 
//   buttonText="Get Started" 
//   buttonColor="bg-blue-500" 
// />
