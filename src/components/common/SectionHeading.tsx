import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  linkText?: string;
  linkHref?: string;
  className?: string;
  titleAs?: 'h1' | 'h2' | 'h3';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  linkText,
  linkHref,
  className = '',
  titleAs: TitleTag = 'h2'
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-10 sm:mb-14 ${
        isCenter ? 'text-center mx-auto max-w-3xl' : 'flex flex-col md:flex-row md:items-end md:justify-between gap-6'
      } ${className}`}
    >
      <div className={isCenter ? 'mx-auto' : 'max-w-2xl'}>
        {eyebrow && (
          <div className="text-xs uppercase tracking-[0.16em] font-semibold text-[#087F78] mb-3">
            {eyebrow}
          </div>
        )}
        <TitleTag
          className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111111] leading-[1.18] tracking-tight"
          style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
        >
          {title}
        </TitleTag>
        {description && (
          <p className="mt-3.5 text-sm sm:text-base text-[#77736C] leading-relaxed max-w-xl">
            {description}
          </p>
        )}
      </div>

      {linkText && linkHref && !isCenter && (
        <div className="shrink-0 pt-2">
          <Link
            to={linkHref}
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#111111] hover:text-[#087F78] transition-colors"
          >
            <span>{linkText}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </div>
  );
};
