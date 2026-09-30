'use client';

import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchInputProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  className?: string;
  onClear?: () => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder = 'Search...',
  className = '',
  onClear
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      <Search className="w-4 h-4 text-[#77736C] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-white border border-[#E7E4DE] rounded-md pl-9 pr-8 py-1.5 text-xs text-[#111111] placeholder-[#77736C] focus:outline-none focus:border-[#087F78] transition-colors"
      />
      {value && (
        <button
          type="button"
          onClick={() => {
            onChange('');
            onClear?.();
          }}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-[#77736C] hover:text-[#111111]"
          aria-label="Clear search query"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
};
