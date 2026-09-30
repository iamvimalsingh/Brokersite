import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'teal' | 'positive' | 'negative' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className = ''
}) => {
  const variantStyles = {
    default: 'bg-[#F3F2EE] text-[#77736C] border border-[#E7E4DE]',
    teal: 'bg-[#DDEDEA] text-[#087F78] border border-[#087F78]/20',
    positive: 'bg-[#0A9F6E]/10 text-[#0A9F6E] border border-[#0A9F6E]/20',
    negative: 'bg-[#E5484D]/10 text-[#E5484D] border border-[#E5484D]/20',
    outline: 'bg-transparent text-[#111111] border border-[#E7E4DE]'
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-xs text-[10px] sm:text-[11px] font-mono uppercase tracking-wider font-medium ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
