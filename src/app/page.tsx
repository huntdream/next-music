import * as stylex from '@stylexjs/stylex';
import { tokens } from './tokens.stylex';
import Bar from '@/components/Bar';
import Nav from '@/components/Nav';

const style = stylex.create({
  main: {},
});

export default function Home() {
  return (
    <main {...stylex.props(style.main)}>
      <Bar />
    </main>
  );
}
