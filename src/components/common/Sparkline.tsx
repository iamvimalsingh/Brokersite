import React from 'react';

interface SparklineProps {
  data: number[];
  isPositive: boolean;
  width?: number;
  height?: number;
  className?: string;
}

export const Sparkline: React.FC<SparklineProps> = ({
  data,
  isPositive,
  width = 110,
  height = 36,
  className = ''
}) => {
  if (!data || data.length < 2) return null;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const padding = 3;

  const points = data.map((val, idx) => {
    const x = padding + (idx / (data.length - 1)) * (width - padding * 2);
    const y = height - padding - ((val - min) / range) * (height - padding * 2);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });

  const pathData = `M ${points.join(' L ')}`;
  const strokeColor = isPositive ? '#0A9F6E' : '#E5484D';
  const fillColor = isPositive ? 'rgba(10, 159, 110, 0.12)' : 'rgba(229, 72, 77, 0.12)';
  const areaData = `${pathData} L ${width - padding},${height} L ${padding},${height} Z`;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={`overflow-visible ${className}`}
      aria-hidden="true"
    >
      <path d={areaData} fill={fillColor} />
      <path
        d={pathData}
        fill="none"
        stroke={strokeColor}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
