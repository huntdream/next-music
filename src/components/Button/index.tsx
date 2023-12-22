import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import * as stylex from '@stylexjs/stylex';

type TVariant = 'elevated' | 'primary';

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  children: ReactNode;
  style?: stylex.StyleXStyles;
  variant?: TVariant;
  wide?: boolean;
}

const styles = stylex.create({
  base: {
    padding: '8px 24px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem',
    height: '36px',
  },
  primary: {
    color: '#fff',
    backgroundColor: {
      default: '#1877f2',
      ':hover:enabled': '#0c5bc1',
    },
  },
  disabled: {
    cursor: 'not-allowed',
    color: 'rgba(29, 27, 32, 0.2)',
    backgroundColor: '#1D1B201F',
  },
  elevated: {
    color: '#6750A4',
    backgroundColor: {
      default: '#fff',
      ':hover': '#F7F2FA',
    },
    boxShadow:
      '0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
  },
  wide: {
    width: '100%',
  },
});

const Button: React.FC<Props> = ({
  children,
  style,
  disabled,
  wide,
  variant = 'primary',
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      {...props}
      {...stylex.props(
        styles.base,
        styles[variant],
        disabled && styles.disabled,
        wide && styles.wide,
        style
      )}
    >
      {children}
    </button>
  );
};

export default Button;
