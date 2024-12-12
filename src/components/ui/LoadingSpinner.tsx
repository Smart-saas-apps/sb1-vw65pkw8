import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  animate: { rotate: 360 }
};

const dotVariants = {
  animate: { scale: [1, 0.5, 1] }
};

export const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center h-full">
    <motion.div
      className="relative w-16 h-16"
      variants={containerVariants}
      animate="animate"
      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
    >
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-full"
          style={{ rotate: `${i * 90}deg` }}
        >
          <motion.div
            className="w-3 h-3 bg-violet-600 rounded-full absolute"
            style={{ left: '50%', transform: 'translateX(-50%)' }}
            variants={dotVariants}
            animate="animate"
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  </div>
);