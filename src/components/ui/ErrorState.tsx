import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  message = "We couldn't load these products right now.",
  onRetry,
}) => {
  return (
    <div className="bg-white rounded-lg border border-red-200 p-8 text-center max-w-md mx-auto my-8 shadow-xs">
      <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-4">
        <AlertTriangle className="w-6 h-6" />
      </div>

      <h3 className="text-base font-bold text-gray-900 mb-1">Something went wrong</h3>
      <p className="text-xs text-gray-500 mb-6">{message}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md text-xs transition-colors shadow-xs"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Try Again</span>
        </button>
      )}
    </div>
  );
};
