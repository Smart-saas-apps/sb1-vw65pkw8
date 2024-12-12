import React from 'react';
import { KeywordMetrics as KeywordMetricsType } from '../types';

interface KeywordMetricsProps {
  metrics: KeywordMetricsType;
}

const KeywordMetrics: React.FC<KeywordMetricsProps> = ({ metrics }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
      <MetricItem
        label="Search Volume"
        value={metrics.searchVolume.toLocaleString()}
      />
      <DifficultyMetric difficulty={metrics.difficulty} />
      <MetricItem
        label="CPC"
        value={`$${metrics.cpc}`}
      />
      <MetricItem
        label="Competition"
        value={`${(Number(metrics.competition) * 100).toFixed(0)}%`}
      />
    </div>
  );
};

interface MetricItemProps {
  label: string;
  value: string;
}

const MetricItem: React.FC<MetricItemProps> = ({ label, value }) => (
  <div>
    <div className="text-sm text-gray-600 mb-1">{label}</div>
    <div className="font-semibold">{value}</div>
  </div>
);

interface DifficultyMetricProps {
  difficulty: number;
}

const DifficultyMetric: React.FC<DifficultyMetricProps> = ({ difficulty }) => (
  <div>
    <div className="text-sm text-gray-600 mb-1">Difficulty</div>
    <div className="font-semibold flex items-center">
      {difficulty}
      <div 
        className="ml-2 w-16 h-2 rounded-full bg-gray-200 overflow-hidden"
        title={`Difficulty: ${difficulty}%`}
      >
        <div 
          className={`h-full rounded-full ${
            difficulty < 33 ? 'bg-green-500' :
            difficulty < 66 ? 'bg-yellow-500' : 'bg-red-500'
          }`}
          style={{ width: `${difficulty}%` }}
        />
      </div>
    </div>
  </div>
);

export default KeywordMetrics;