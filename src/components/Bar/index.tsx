import React from 'react';
import * as stylex from '@stylexjs/stylex';

interface Props {}

const style = stylex.create({
  wrap: {
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    padding: '0 24px 24px',
  },
  bar: {
    width: '768px',
    maxWidth: '100%',
    backgroundColor: '#fff',
    borderRadius: '34px',
    height: '56px',
    boxShadow: '1px 2px 6px rgba(0,0,0,0.24)',
    backdropFilter: 'blur(10px)',
  },
});

const Bar: React.FC<Props> = () => {
  return (
    <div {...stylex.props(style.wrap)}>
      <div {...stylex.props(style.bar)}>Nav</div>
    </div>
  );
};

export default Bar;
