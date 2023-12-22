import React, {
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useId,
} from 'react';
import * as stylex from '@stylexjs/stylex';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'style'> {
  style?: stylex.StyleXStyles;
  label?: ReactNode;
}

const styles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '16px',
  },
  label: {
    marginBottom: '6px',
  },
  input: {
    outline: 'none',
    padding: '4px 6px',
    border: '1px solid #79747E',
    height: '36px',
    borderRadius: '4px',
  },
});

const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, style, ...props }, ref) => {
    const id = useId();

    return (
      <div {...stylex.props(styles.base, style)}>
        {label && (
          <label htmlFor={id} {...stylex.props(styles.label)}>
            {label}
          </label>
        )}
        <input {...props} ref={ref} id={id} {...stylex.props(styles.input)} />
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
