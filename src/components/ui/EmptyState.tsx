import React from 'react';

export const EmptyState: React.FC = () => (
  <div className="flex items-center justify-center h-full">
    <div className="text-center">
      <div className="flex justify-center mb-4">
        <svg className="w-16 h-16 text-violet-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h3 className="text-lg font-medium mb-2">No Keywords Yet</h3>
      <p className="text-gray-600 text-sm">
        Enter your niche or keywords to get started with the analysis
      </p>
      <button className="mt-4 inline-flex items-center text-violet-600 hover:text-violet-700">
        <svg className="w-4 h-4 mr-1" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 4v8M4 8h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        Get Expert Help
      </button>
    </div>
  </div>
);