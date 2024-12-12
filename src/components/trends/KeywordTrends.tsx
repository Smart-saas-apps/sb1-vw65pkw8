import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, TrendingUp, Calendar } from 'lucide-react';
import { Card } from '../ui/Card';

interface TrendPoint {
  month: string;
  volume: number;
}

const mockTrendData: TrendPoint[] = [
  { month: 'Jan', volume: 1200 },
  { month: 'Feb', volume: 1400 },
  { month: 'Mar', volume: 1100 },
  { month: 'Apr', volume: 1600 },
  { month: 'May', volume: 2000 },
  { month: 'Jun', volume: 1800 },
];

const chartVariants = {
  initial: { pathLength: 0, opacity: 0 },
  animate: { pathLength: 1, opacity: 1 }
};

export const KeywordTrends: React.FC = () => {
  const maxVolume = Math.max(...mockTrendData.map(d => d.volume));
  const minVolume = Math.min(...mockTrendData.map(d => d.volume));
  const height = 200;
  const width = 600;
  const padding = 40;

  const points = mockTrendData.map((d, i) => ({
    x: (i * (width - padding * 2)) / (mockTrendData.length - 1) + padding,
    y: height - (((d.volume - minVolume) / (maxVolume - minVolume)) * (height - padding * 2) + padding)
  }));

  const pathD = `M ${points.map(p => `${p.x},${p.y}`).join(' L ')}`;

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <LineChart className="w-5 h-5 text-violet-600" />
          <h3 className="text-lg font-medium">Keyword Trends</h3>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Calendar className="w-4 h-4" />
          <span>Last 6 months</span>
        </div>
      </div>
      
      <div className="relative" style={{ height }}>
        <svg width={width} height={height}>
          {/* Grid lines */}
          {[...Array(5)].map((_, i) => (
            <line
              key={i}
              x1={padding}
              y1={i * (height - padding * 2) / 4 + padding}
              x2={width - padding}
              y2={i * (height - padding * 2) / 4 + padding}
              stroke="#f0f0f0"
              strokeWidth="1"
            />
          ))}
          
          {/* Trend line */}
          <motion.path
            d={pathD}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="3"
            variants={chartVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
          
          {/* Data points */}
          {points.map((point, i) => (
            <motion.circle
              key={i}
              cx={point.x}
              cy={point.y}
              r="4"
              fill="#7c3aed"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1 }}
            />
          ))}
        </svg>
        
        {/* X-axis labels */}
        <div className="flex justify-between px-10 mt-2">
          {mockTrendData.map((d, i) => (
            <div key={i} className="text-sm text-gray-600">{d.month}</div>
          ))}
        </div>
      </div>
    </Card>
  );
};