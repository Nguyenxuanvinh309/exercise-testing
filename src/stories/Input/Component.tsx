import React from 'react';
import Component from '@/components/Input';
import { InputProps as Props } from '@/components/Input';

/**
 * Primary UI component for user interaction
 */
export const Input = ({
  size = 'medium',
  label,
  placeholder,
  required,
  disabled,
  error,
  errorText,
  ...props
}: Props) => {
  return (
    <Component
      size={size}
      label={label}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      error={error}
      errorText={errorText}
      {...props}
    />
  );
};
