import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { KeywordCluster } from '../../types';
import KeywordMetrics from '../KeywordMetrics';
import { Card } from '../ui/Card';
import { Layers, ChevronRight } from 'lucide-react';

interface KeywordClusterListProps {
  clusters: KeywordCluster[];
}

const clusterVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 }
};

const keywordVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
};

const KeywordClusterList: React.FC<KeywordClusterListProps> = ({ clusters }) => {
  return (
    <AnimatePresence>
      <div className="space-y-4">
        {clusters.map((cluster, index) => (
          <motion.div
            key={index}
            variants={clusterVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: index * 0.2 }}
          >
            <Card className="p-6 hover:bg-violet-50/50 transition-colors duration-300">
              <div className="flex items-center mb-3">
                <Layers className="w-5 h-5 text-violet-600 mr-2" />
                <h4 className="font-medium text-lg">{cluster.name}</h4>
              </div>
              {cluster.metrics && <KeywordMetrics metrics={cluster.metrics} />}
              <div className="flex flex-wrap gap-2 mt-4">
                {cluster.keywords.map((keyword, keywordIndex) => (
                  <motion.span
                    key={keywordIndex}
                    className="inline-flex items-center px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm hover:bg-violet-200 transition-colors cursor-pointer"
                    variants={keywordVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <ChevronRight className="w-4 h-4 mr-1" />
                    {keyword}
                  </motion.span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );
};

export default KeywordClusterList;