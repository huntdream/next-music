import React from 'react';
import * as stylex from '@stylexjs/stylex';

interface Props {
  style?: stylex.StyleXStyles;
}

const LibraryMusic: React.FC<Props> = ({ style }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='24'
      viewBox='0 -960 960 960'
      width='24'
      {...stylex.props(style)}
    >
      <path d='M500-360q42 0 71-29t29-71v-220h120v-80H560v220q-13-10-28-15t-32-5q-42 0-71 29t-29 71q0 42 29 71t71 29ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z' />
    </svg>
  );
};

export default LibraryMusic;
