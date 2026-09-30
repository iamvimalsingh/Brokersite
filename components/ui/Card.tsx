import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = false
}) => {
  return (
    <div
      className={`bg-white border border-[#E7E4DE] rounded-lg p-5 sm:p-6 shadow-xs ${
        hoverable ? 'hover:border-[#087F78] hover:shadow-sm transition-all duration-150' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
