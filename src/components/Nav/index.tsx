'use client';

import React, { useState } from 'react';
import * as stylex from '@stylexjs/stylex';
import { flex } from '@/app/tokens.stylex';
import Button from '../Button';
import Link from 'next/link';
import Home from '@/icons/Home';
import LibraryMusic from '@/icons/LibraryMusic';
import Person from '@/icons/Person';
import Modal from '../Modal';
import Login from '../Login';

interface Props {}

const styles = stylex.create({
  nav: {
    padding: '4px 16px',
    position: 'relative',
  },
  login: {
    position: 'absolute',
    right: '16px',
  },
  icon: {
    width: '48px',
    height: '48px',
    padding: '6px',
    margin: '0 16px',
    borderRadius: '6px',
    cursor: 'pointer',
    backgroundColor: {
      default: 'transparent',
      ':hover': '#eee',
    },
  },
});

const Nav: React.FC<Props> = () => {
  const [visible, setVisible] = useState(false);

  const handleLogin = () => {
    setVisible(true);
  };

  return (
    <div {...stylex.props(flex.row, flex.center, styles.nav)}>
      <Link href='/'>
        <Home style={styles.icon} />
      </Link>
      <Link href='/library'>
        <LibraryMusic style={styles.icon} />
      </Link>
      <Link href='/me'>
        <Person style={styles.icon} />
      </Link>
      <Button style={styles.login} onClick={handleLogin}>
        Login
      </Button>
      <Modal title='Login' visible={visible} onClose={() => setVisible(false)}>
        <Login />
      </Modal>
    </div>
  );
};

export default Nav;
