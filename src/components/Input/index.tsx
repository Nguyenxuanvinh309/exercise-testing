import React from 'react';
import './styles.css';

export interface InputProps {
  /**
   * How large should the input be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Variant input type
   */
  variant?: 'default' | 'filled' | 'unstyled';
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  /**
   * Input contents
   */
  label?: string;
  placeholder?: string;
  errorText?: string;
  value?: string | number;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const InputComponent = ({
  size = 'medium',
  label,
  placeholder,
  variant = 'default',
  required = false,
  disabled = false,
  error = false,
  errorText,
  value,
  ...props
}: InputProps) => {
  const defaultVariant = 
    'placeholder-gray-500 text-black w-inherit bg-white border-gray-400 focus-visible:border-primary-9 focus-visible:outline-0 hover:border-primary-9 transition-[border]';
  const filledVariant = 
    'placeholder-gray-100 text-black w-inherit border-gray-400 bg-gray-400 focus-visible:border-primary-9 focus-visible:outline-0 hover:border-primary-9 transition-[border]';
  const unstyledVariant = 
    'text-black w-inherit bg-transparent border-0 focus-visible:border-transparent focus-visible:outline-0 hover:border-transparent transition-[border] px-0';
  const disabledStyle = 
    `placeholder-gray-100 text-black w-inherit bg-gray-400 focus-visible:border-gray-100 focus-visible:outline-0 hover:border-gray-100 transition-[border] border-gray-100 pointer-events-none`;
  const errorStyle = 'placeholder-gray-500 text-black w-inherit bg-white border-red-500 focus-visible:border-red-500 focus-visible:outline-0 hover:border-red-500 transition-[border]';

  const variantList = {
    default: defaultVariant,
    filled: filledVariant,
    unstyled: unstyledVariant,
  }

  return (
    <div className='flex flex-col'>
      {label && <label className='storybook-label text-left mb-[2px]'>{label}{required && <span className='text-red-500'>*</span>}</label>}
      <input
        value={value}
        placeholder={placeholder}
        className={`${[
          'storybook-input',
          `storybook-input--${size}`,
          disabled ? disabledStyle : variantList[`${variant}`],
          error ? errorStyle : ''
        ].join(' ')}`}
        {...props}
      />
      {error && <span className='error-text text-red-500 text-left'>{errorText || ''}</span>}
    </div>
  );
};

export default InputComponent;