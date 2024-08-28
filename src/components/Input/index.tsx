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
  /**
   * Input contents
   */
  label?: string;
  placeholder?: string;
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
  ...props
}: InputProps) => {
  const defaultVariant = 
    'placeholder-gray-500 text-black w-full bg-white border-gray-400 focus-visible:border-primary-9 focus-visible:outline-0 hover:border-primary-9 transition-[border]';
  const filledVariant = 
    'placeholder-gray-100 text-black w-full border-gray-400 bg-gray-400 focus-visible:border-primary-9 focus-visible:outline-0 hover:border-primary-9 transition-[border]';
  const unstyledVariant = 
    'text-black w-full bg-transparent border-0 focus-visible:border-transparent focus-visible:outline-0 hover:border-transparent transition-[border] px-0';
  const disabledStyle = 
    `placeholder-gray-100 text-black w-full bg-gray-400 focus-visible:border-gray-100 focus-visible:outline-0 hover:border-gray-100 transition-[border] border-gray-100 pointer-events-none`;

  const variantList = {
    default: defaultVariant,
    filled: filledVariant,
    unstyled: unstyledVariant,
  }

  console.log(disabled);
  return (
    <>
      {label && <label className='storybook-label mb-[2px]'>{label}{required && <span className='text-red-500'>*</span>}</label>}
      <input
        placeholder={placeholder}
        className={`${[
          'storybook-input',
          `storybook-input--${size}`,
          disabled ? disabledStyle : variantList[`${variant}`],
        ].join(' ')}`}
        {...props}
      />
    </>
  );
};

export default InputComponent;