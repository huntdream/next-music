import React, { ReactNode, MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';
import * as stylex from '@stylexjs/stylex';
import { flex, layout } from '@/app/tokens.stylex';
import Close from '@/icons/Close';

interface ModalProps {
  visible?: boolean;
  className?: string;
  title?: ReactNode;
  children?: ReactNode;
  onClose?: () => void;
}

const styles = stylex.create({
  mask: {
    zIndex: 40,
    userSelect: 'none',
    backgroundColor: 'rgba(0,0,0,0.24)',
    backdropFilter: 'blur(3px)',
  },
  layer: {
    overflow: 'auto',
    zIndex: 50,
  },
  base: {
    alignItems: 'stretch',
    padding: '80px 8px',
    minHeight: '100vh',
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'start',
  },
  content: {
    maxWidth: '100%',
    pointerEvents: 'auto',
    width: '384px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  header: {
    height: '56px',
    position: 'relative',
    border: '1px solid #eee',
  },
  close: {
    position: 'absolute',
    right: '1rem',
    cursor: 'pointer',
    width: '36px',
    height: '36px',
    padding: '4px',
    borderRadius: '50%',
    backgroundColor: {
      default: 'transparent',
      ':hover': '#eee',
    },
  },
  body: {
    flex: '1',
    padding: '16px',
  },
});

const Modal: React.FC<ModalProps> = ({
  visible,
  onClose,
  title,
  className,
  children,
}) => {
  const stopPropagation = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return visible
    ? createPortal(
        <div>
          <div {...stylex.props(styles.mask, layout.fullPage)}></div>
          <div
            {...stylex.props(styles.layer, layout.fullPage)}
            onClick={onClose}
          >
            <div {...stylex.props(flex.col, styles.base)}>
              <div {...stylex.props(flex.row, styles.inner)}>
                <div
                  {...stylex.props(flex.col, styles.content)}
                  onClick={stopPropagation}
                >
                  <div {...stylex.props(flex.row, flex.center, styles.header)}>
                    <h2>{title}</h2>

                    <Close {...stylex.props(styles.close)} onClick={onClose} />
                  </div>
                  <div {...stylex.props(styles.body)}>{children}</div>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;
};

export default Modal;
