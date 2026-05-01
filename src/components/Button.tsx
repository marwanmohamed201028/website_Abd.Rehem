'use client';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  type = 'button', 
  disabled = false, 
  className = '' 
}: ButtonProps) {
  const baseClasses = 'px-6 py-3 font-bold transition-all duration-200 inline-flex items-center gap-2 rounded-md';
  
  const variants = {
    primary: 'bg-green-600 text-white hover:bg-green-700 hover:translate-y-[-1px]',
    secondary: 'bg-transparent text-green-600 border-2 border-green-600 hover:bg-green-600 hover:text-white'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}