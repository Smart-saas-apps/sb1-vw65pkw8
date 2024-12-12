import React from 'react';
import { motion } from 'framer-motion';

const backgroundVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

const bubbleVariants = {
  animate: {
    x: [0, 30, 0],
    y: [0, 20, 0],
  }
};

export const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-violet-50 to-white"
        variants={backgroundVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1 }}
      >
        {[...Array(5)].map((_, i) => {
          const size = Math.random() * 400 + 200;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-violet-100/50 blur-3xl"
              style={{
                width: size,
                height: size,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              variants={bubbleVariants}
              animate="animate"
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          );
        })}
      </motion.div>
    </div>
  );
};