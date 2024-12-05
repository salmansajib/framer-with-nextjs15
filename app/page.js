"use client";

import { motion, useScroll } from "motion/react";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="overflow-hidden bg-zinc-950">
      <main>
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-red-400 origin-left"
        ></motion.div>

        <h1 className=" mt-10 text-center text-xl font-semibold text-gray-50">
          Scroll to see the progress bar
        </h1>
        <div className="min-h-svh grid place-content-center">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 1,
              },
            }}
            className="size-[150px] bg-blue-500 rounded-full"
          ></motion.div>
        </div>

        <div className="min-h-svh bg-slate-950 grid place-content-center">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            whileInView={{
              opacity: 1,
              scale: 1.2,
              transition: {
                duration: 1,
              },
            }}
            whileHover={{
              scale: 1,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="size-[150px] bg-green-500 rounded-full"
          ></motion.div>
        </div>
      </main>
    </div>
  );
}
