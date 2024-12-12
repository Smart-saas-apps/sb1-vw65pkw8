import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, BarChart2, Target } from 'lucide-react';
import { Card } from '../ui/Card';

interface KeywordAnalyticsProps {
  keywords: string[];
}

const statVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 }
};

export const KeywordAnalytics: React.FC<KeywordAnalyticsProps> = ({ keywords }) => {
  // Mock analytics data
  const analytics = {
    avgDifficulty: 45,
    avgSearchVolume: 2500,
    competitionLevel: 'Medium',
    potentialTraffic: 15000,
  };

  return (
    <Card className="p-6">
      <div className="flex items-center space-x-2 mb-6">
        <BarChart2 className="w-5 h-5 text-violet-600" />
        <h3 className="text-lg font-medium">Keyword Analytics</h3>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <motion.div
          className="space-y-2"
          variants={statVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.1 }}
        >
          <div className="text-sm text-gray-600">Average Difficulty</div>
          <div className="text-2xl font-semibold text-violet-600">{analytics.avgDifficulty}%</div>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-violet-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${analytics.avgDifficulty}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        <motion.div
          className="space-y-2"
          variants={statVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
        >
          <div className="text-sm text-gray-600">Average Search Volume</div>
          <div className="text-2xl font-semibold text-violet-600">
            {analytics.avgSearchVolume.toLocaleString()}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Target className="w-4 h-4 mr-1" />
            Monthly searches
          </div>
        </motion.div>

        <motion.div
          className="space-y-2"
          variants={statVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.3 }}
        >
          <div className="text-sm text-gray-600">Competition Level</div>
          <div className="text-2xl font-semibold text-violet-600">
            {analytics.competitionLevel}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <PieChart className="w-4 h-4 mr-1" />
            Market competition
          </div>
        </motion.div>

        <motion.div
          className="space-y-2"
          variants={statVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4 }}
        >
          <div className="text-sm text-gray-600">Potential Traffic</div>
          <div className="text-2xl font-semibold text-violet-600">
            {analytics.potentialTraffic.toLocaleString()}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <BarChart2 className="w-4 h-4 mr-1" />
            Monthly visitors
          </div>
        </motion.div>
      </div>
    </Card>
  );
};