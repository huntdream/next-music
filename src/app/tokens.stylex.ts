import stylex from '@stylexjs/stylex';

export const tokens = stylex.defineVars({
  primaryText: '#050505',
  secondaryText: '#65676b',
  primary: '#1877f2',
  accent: 'blue',
  background: 'white',
  lineColor: 'gray',
  borderRadius: '4px',
  fontFamily: 'system-ui, sans-serif',
  fontSize: '16px',
  iconSize: '24px',
  error: '#DC362E',
});

export const layout = stylex.create({
  fullPage: {
    position: 'fixed',
    inset: '0',
  },
});

export const flex = stylex.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
