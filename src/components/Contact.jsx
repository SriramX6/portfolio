import React, { useRef, useState } from "react";
import { motion } from "framer-motion";


import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  
  

  return (
    <div
      className={`xl:mt-30    sm:w-auto sm:mt-0 sm:ml-0 xl:mt-12 xl:flex-row flex flex-col xl:gap-20 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("down", "tween", 0.5, 2)}
        // className="h-screen"
        className='flex-[0.75]  p-8 rounded-2xl'
      >
        <section className={`relative w-full h-[38vh] lg:h-[52vh]  mx-auto`}>
      <div
        className={`absolute inset-0 flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#2ea6c9]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#2ea6c9]'>Sriram</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I specialize in <br className='sm:block hidden' /> web development and <br className='sm:block hidden' />
           AI/ML
          </p>
           
        </div>
      </div>
      </section>
        
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.5, 2)}
        className='xl:flex-1 xl:h-auto md:h-[550px] xl:h-[250px] xl:w-full  sm:ml-5 xl:mt-40  p-4'
      >

<motion.div  >
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2  className= {styles.sectionHeadText}>About me</h2>
      </motion.div>

      <motion.p
        
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in python and
        JavaScript, and expertise in frameworks like Flask, React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "about");
