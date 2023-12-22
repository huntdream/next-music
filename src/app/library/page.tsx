import React from 'react';
import * as stylex from '@stylexjs/stylex';

interface Props {
  style?: stylex.StyleXStyles;
}

const styles = stylex.create({});

const Library: React.FC<Props> = ({ style }) => {
  return <div>Library</div>;
};

export default Library;
