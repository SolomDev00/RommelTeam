"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChartArea, Play, Users2 } from "lucide-react";

const circleVariants = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 0.5,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.5, 0.7, 0.5],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const circleVariantsRight = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 0.5,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.5, 0.7, 0.5],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
    transition: { duration: 0.3 },
  },
};

const LandingPage: React.FC = () => {
  return (
    <main className="min-h-screen text-white flex flex-col items-center justify-center relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-blue-500/30 blur-3xl drop-shadow-[0_0_20px_rgba(59,130,246,0.7)]"
        variants={circleVariants}
        initial="hidden"
        animate={["visible", "animate"]}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-600/30 blur-3xl drop-shadow-[0_0_20px_rgba(59,130,246,0.7)]"
        variants={circleVariantsRight}
        initial="hidden"
        animate={["visible", "animate"]}
      />
      <div className="relative z-10 text-center px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Most Successful Continuity <br />
          <span className="text-blue-400">
            [ <span className="text-white">Rommel Team</span> ]
          </span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4 mb-8"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          <motion.button
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold border border-blue-400 shadow-lg shadow-blue-500/30"
            variants={buttonVariants}
            whileHover="hover"
          >
            Get in Touch
          </motion.button>
          <motion.button
            className="flex items-center space-x-2 bg-transparent text-blue-400 px-6 py-3 rounded-lg font-semibold border border-blue-400"
            variants={buttonVariants}
            whileHover="hover"
          >
            <Play className="w-5 h-5" />
            <span>Watch Demo Video</span>
          </motion.button>
        </motion.div>
        <motion.div
          className="flex justify-center space-x-8 mb-3"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9 }}
        >
          <div className="flex items-center space-x-2">
            <Users2 className="w-6 h-6 text-blue-400" />
            <span>+40</span>
          </div>
          <div className="flex items-center space-x-2">
            <ChartArea className="w-6 h-6 text-blue-400" />
            <span>10%</span>
          </div>
        </motion.div>
        <motion.div
          className="flex justify-center space-x-4"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          <a href="#" className="text-gray-400 hover:text-blue-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.4.6a3 3 0 00-2.1 2.1C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 002.1 2.1c1.7.6 9.4.6 9.4.6s7.7 0 9.4-.6a3 3 0 002.1-2.1c.5-1.8.5-5.8.5-5.8s0-4-.5-5.8zM9.8 15.5V8.5l6.2 3.5-6.2 3.5z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </main>
  );
};

export default LandingPage;
