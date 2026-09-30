import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'teal' | 'outline' | 'ghost' | 'soft';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  to?: string;
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  'aria-label'?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  to,
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  'aria-label': ariaLabel,
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F78] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap cursor-pointer select-none rounded-[6px]';

  const variantClasses = {
    primary:
      'bg-[#181818] text-[#FBFBF9] hover:bg-[#2A2A2A] active:bg-[#000000] border border-[#181818] shadow-xs',
    teal:
      'bg-[#087F78] text-white hover:bg-[#076C66] active:bg-[#055550] border border-[#087F78] shadow-xs',
    outline:
      'bg-transparent text-[#111111] border border-[#E7E4DE] hover:border-[#77736C] hover:bg-[#F3F2EE]',
    ghost:
      'bg-transparent text-[#111111] hover:bg-[#F3F2EE] hover:text-[#087F78] border border-transparent',
    soft:
      'bg-[#DDEDEA] text-[#087F78] hover:bg-[#CCE5E1] border border-transparent font-semibold',
  };

  const sizeClasses = {
    sm: 'text-xs min-h-[36px] px-3.5 py-1.5 gap-1.5',
    md: 'text-sm min-h-[44px] px-5 py-2.5 gap-2',
    lg: 'text-base min-h-[48px] px-6 py-3 gap-2.5',
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} onClick={onClick} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        onClick={onClick}
        aria-label={ariaLabel}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};
