import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import KeywordMetrics from '../KeywordMetrics';
import { analyzeKeyword } from '../../utils/keywordAnalysis';
import { Search, TrendingUp } from 'lucide-react';

interface KeywordListProps {
  keywords: string[];
}

const keywordVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
};

const tooltipVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 }
};

const KeywordList: React.FC<KeywordListProps> = ({ keywords }) => {
  return (
    <AnimatePresence>
      <div className="flex flex-wrap gap-2">
        {keywords.map((keyword, index) => (
          <motion.div
            key={index}
            className="group relative"
            variants={keywordVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: index * 0.1 }}
          >
            <motion.span
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-violet-500 to-violet-600 text-white rounded-full text-sm cursor-pointer shadow-md hover:shadow-lg transition-shadow"
              whileHover="hover"
              whileTap="tap"
            >
              <Search className="w-4 h-4 mr-2" />
              {keyword}
              <TrendingUp className="w-4 h-4 ml-2" />
            </motion.span>
            <motion.div
              className="absolute z-10 left-0 mt-2 w-72"
              variants={tooltipVariants}
              initial="initial"
              whileHover="animate"
            >
              <KeywordMetrics metrics={analyzeKeyword(keyword)} />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );
};

export default KeywordList;