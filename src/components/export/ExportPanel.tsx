import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileSpreadsheet, FileText, Share2 } from 'lucide-react';
import { Card } from '../ui/Card';

interface ExportPanelProps {
  keywords: string[];
}

const buttonVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
};

export const ExportPanel: React.FC<ExportPanelProps> = ({ keywords }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(keywords.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExportCSV = () => {
    const csvContent = 'data:text/csv;charset=utf-8,' + keywords.join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'keywords.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Download className="w-5 h-5 text-violet-600" />
          <h3 className="text-lg font-medium">Export Keywords</h3>
        </div>
        <span className="text-sm text-gray-600">{keywords.length} keywords</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.button
          className="flex items-center justify-center space-x-2 p-4 bg-violet-50 rounded-lg hover:bg-violet-100 transition-colors"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={handleExportCSV}
        >
          <FileSpreadsheet className="w-5 h-5 text-violet-600" />
          <span className="text-violet-600 font-medium">Export as CSV</span>
        </motion.button>

        <motion.button
          className="flex items-center justify-center space-x-2 p-4 bg-violet-50 rounded-lg hover:bg-violet-100 transition-colors"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={handleCopyToClipboard}
        >
          <Share2 className="w-5 h-5 text-violet-600" />
          <span className="text-violet-600 font-medium">
            {copied ? 'Copied!' : 'Copy to Clipboard'}
          </span>
        </motion.button>
      </div>
    </Card>
  );
};