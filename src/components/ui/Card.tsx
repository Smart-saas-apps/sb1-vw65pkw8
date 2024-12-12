import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  hover: { scale: 1.01 }
};

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      className={`bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow ${className}`}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};