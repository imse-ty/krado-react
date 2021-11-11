/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useThemeUI } from 'theme-ui';
import { AnimatePresence, motion } from 'framer-motion';
import { MdChevronRight, MdClose } from 'react-icons/md';
import Box from '../Box/Box';
import ToggleIcon from '../ToggleIcon/ToggleIcon';

export function PanelContent({ children, size, location, ...props }) {
  function getSize(size) {
    if (size === 'quarter') {
      return '25';
    }

    if (size === 'half') {
      return '50';
    }

    if (size === 'full') {
      return '100';
    }
  }

  function setLocationAndSize(location, size) {
    var result;

    switch (location) {
      case 'left':
        result = { left: 0, width: `${getSize(size)}vw`, height: '100vh' };
        break;
      case 'right':
        result = { right: 0, width: `${getSize(size)}vw`, height: '100vh' };
        break;
      case 'top':
        result = { top: 0, width: '100vw', height: `${getSize(size)}vh` };
        break;
      case 'bottom':
        result = { bottom: 0, width: '100vw', height: `${getSize(size)}vh` };
        break;
      default:
        result = { left: 0, width: `${getSize(size)}vw`, height: '100vh' };
    }

    return result;
  }
  const locationAndSize = setLocationAndSize(location, size);

  function setHiddenAnimation(location) {
    if (location === 'left') {
      return { x: '-100%' };
    }

    if (location === 'top') {
      return { y: '-100%' };
    }

    if (location === 'right') {
      return { x: '100%' };
    }

    if (location === 'bottom') {
      return { y: '100%' };
    }
  }
  const hiddenAnimation = setHiddenAnimation(location);
  const variant = {
    hidden: { ...hiddenAnimation },
    show: { x: 0, y: 0 }
  };

  return (
    <motion.div
      variants={variant}
      transition={{ type: 'spring', duration: 0.5, bounce: 0 }}
      sx={{
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'background',
        boxShadow: 'soft.highEast',
        ...locationAndSize
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
PanelContent.propTypes = {
  size: PropTypes.oneOf(['quarter', 'half', 'full']),
  location: PropTypes.oneOf(['left', 'right', 'top', 'bottom'])
};
PanelContent.defaultProps = {
  size: 'quarter',
  location: 'left'
};

export function PanelHeader({ children }) {
  return (
    <header
      sx={{
        padding: 4,
        fontSize: '26px',
        fontWeight: 'bold'
      }}
    >
      {children}
    </header>
  );
}

export function PanelBody({ children }) {
  const variant = {
    hidden: {
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  return (
    <motion.ul
      variants={variant}
      initial="hidden"
      animate="show"
      exit="hidden"
      sx={{
        variant: 'text.body.h3',
        overflowX: 'hidden',
        overflowY: 'scroll',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        width: '100%',
        height: '100%'
      }}
    >
      {children}
    </motion.ul>
  );
}

export function PanelItem({ children, icon, ...props }) {
  const [isItemHovered, setIsItemHovered] = useState(false);
  const variant = {
    hidden: {
      x: '50%',
      opacity: 0,
      transition: { type: 'spring', damping: 20, duration: 0.4 }
    },
    show: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', damping: 20, duration: 0.4 }
    },
    active: {
      color: useThemeUI().theme.colors.highlight,
      boxShadow: useThemeUI().theme.shadows.soft.highMiddle
    }
  };
  const iconVariant = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1
    }
  };

  return (
    <motion.li
      variants={variant}
      onHoverStart={() => setIsItemHovered(true)}
      onHoverEnd={() => setIsItemHovered(false)}
    >
      <motion.a
        whileHover={variant.active}
        style={{ boxShadow: '0px 5px 16px rgba(0, 0, 0, 0)' }}
        sx={{
          display: 'flex',
          paddingX: 4,
          paddingY: 3,
          color: 'inherit',
          textDecoration: 'none',
          '&:hover': {
            cursor: 'pointer'
          }
        }}
        {...props}
      >
        {children}

        <motion.span
          variants={iconVariant}
          animate={isItemHovered ? 'show' : 'hidden'}
          sx={{ marginLeft: 'auto' }}
        >
          {!icon ? <MdChevronRight /> : icon}
        </motion.span>
      </motion.a>
    </motion.li>
  );
}

export function PanelDivider() {
  return (
    <Box
      marginX={4}
      marginY={3}
      backgroundColor="lightGray"
      sx={{ height: '1px' }}
    />
  );
}

export function Panel({ children, isOpen, size, ...props }) {
  const variant = { hidden: { opacity: 0 }, show: { opacity: 1 } };

  return (
    <motion.div
      variants={variant}
      animate={isOpen ? 'show' : 'hidden'}
      sx={{ position: 'relative', zIndex: 2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function PanelCloseButton({ ...props }) {
  return (
    <ToggleIcon
      sx={{
        position: 'absolute',
        top: 4,
        right: 4,
        width: '42px',
        height: '42px',
        boxShadow: 'soft.low'
      }}
      {...props}
    >
      <MdClose />
    </ToggleIcon>
  );
}

export function PanelOverlay({ isOpen, onClick }) {
  const variant = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="filter"
          variants={variant}
          initial="hidden"
          animate="show"
          exit="hidden"
          onClick={onClick}
          sx={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            backdropFilter: 'grayscale(100%)'
          }}
        />
      )}
    </AnimatePresence>
  );
}
