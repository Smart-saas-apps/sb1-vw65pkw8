import React from 'react';
import { KeywordCluster } from '../types';
import KeywordList from './keyword/KeywordList';
import KeywordClusterList from './keyword/KeywordClusterList';
import { LoadingSpinner } from './ui/LoadingSpinner';
import { EmptyState } from './ui/EmptyState';

interface ResultsPanelProps {
  keywords: string[];
  clusters: KeywordCluster[];
  isLoading?: boolean;
}

const ResultsPanel: React.FC<ResultsPanelProps> = ({ keywords, clusters, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="bg-white rounded-lg p-6 h-full">
        <LoadingSpinner />
      </div>
    );
  }

  if (keywords.length === 0) {
    return (
      <div className="bg-white rounded-lg p-6 h-full">
        <EmptyState />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-4">Generated Keywords</h3>
        <KeywordList keywords={keywords} />
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-4">Keyword Clusters</h3>
        <KeywordClusterList clusters={clusters} />
      </div>
    </div>
  );
};

export default ResultsPanel;