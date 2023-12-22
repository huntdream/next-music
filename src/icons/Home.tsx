import React from 'react';
import * as stylex from '@stylexjs/stylex';

interface Props {
  style?: stylex.StyleXStyles;
}

const Home: React.FC<Props> = ({ style }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='24'
      viewBox='0 -960 960 960'
      width='24'
      {...stylex.props(style)}
    >
      <path d='M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z' />
    </svg>
  );
};

export default Home;
