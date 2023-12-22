import React, { SVGAttributes } from 'react';
import * as stylex from '@stylexjs/stylex';

interface Props extends Omit<SVGAttributes<HTMLOrSVGElement>, 'style'> {
  style?: stylex.StyleXStyles;
}

const Close: React.FC<Props> = ({ style, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='24'
      viewBox='0 -960 960 960'
      width='24'
      {...props}
      {...stylex.props(style)}
    >
      <path d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z' />
    </svg>
  );
};

export default Close;
