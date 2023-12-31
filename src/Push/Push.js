import { useState } from 'react';
import { useThemeUI } from 'theme-ui';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Box from '../Box/Box';
import Text from '../Text/Text';
import Flex from '../Flex/Flex';
import Divider from '../Divider/Divider';
import ToggleIcon from '../ToggleIcon/ToggleIcon';
import theme from '../theme';

const menuWidth = 287;
const menuTransition = { type: 'spring', duration: 0.5, bounce: 0 };

// Predefined Framer Motion animations
const menuVariant = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.2 }
  },
  show: { opacity: 1, transition: { duration: 0.8 } }
};

const itemVariant = {
  active: {
    color: theme.colors.action.active
  }
};

const itemVariantShadow = {
  ...itemVariant,
  active: {
    ...itemVariant.active,
    boxShadow: theme.shadows.soft.highMiddle
  }
};

const subMenuVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } }
};

const subItemVariant = {
  active: {
    color: theme.colors.action.active
  }
};

function PushCloseButton({ isOpen, ...rest }) {
  const context = useThemeUI();
  const { theme } = context;

  const variant = {
    hidden: { marginLeft: `${theme.space[3]}px` },
    show: { marginLeft: `${menuWidth - 16}px` }
  };

  return (
    <motion.div
      variants={variant}
      initial={false}
      animate={isOpen ? 'show' : 'hidden'}
      transition={menuTransition}
      sx={{ position: 'fixed', zIndex: 2, marginTop: 3 }}
    >
      <ToggleIcon
        sx={{
          fontSize: 6,
          boxShadow: 'soft.low'
        }}
        {...rest}
      >
        {isOpen ? <MdChevronLeft /> : <MdChevronRight />}
      </ToggleIcon>
    </motion.div>
  );
}

export function PushHeader({ description, children, ...props }) {
  return (
    <motion.li
      variants={itemVariant}
      whileHover={itemVariant.active}
      sx={{ marginY: 4 }}
    >
      <a
        sx={{
          position: 'relative',
          color: 'inherit',
          textDecoration: 'none',
          '&:hover': {
            cursor: 'pointer'
          }
        }}
        {...props}
      >
        <Box sx={{ position: 'absolute', top: 1, left: 2, fontSize: 6 }}>
          <MdChevronLeft />
        </Box>
        <Box sx={{ paddingX: 4 }}>
          <Text
            as="div"
            sx={{
              color: 'inherit',
              fontSize: '28px',
              fontWeight: 'bold'
            }}
          >
            {children}
          </Text>
          {description && (
            <Text as="div" variant="body.caption" sx={{ marginTop: 3 }}>
              {description}
            </Text>
          )}
        </Box>
      </a>
    </motion.li>
  );
}

export function PushLabel({ children }) {
  return (
    <motion.li
      variants={itemVariantShadow}
      sx={{
        marginTop: 4,
        marginBottom: 3,
        paddingX: 4,
        color: 'secondary.regular',
        fontSize: 1,
        fontWeight: 600,
        textTransform: 'uppercase'
      }}
    >
      {children}
    </motion.li>
  );
}

function PushSubMenu({ children }) {
  return (
    <motion.ul
      variants={subMenuVariant}
      initial="hidden"
      animate="show"
      exit="hidden"
      sx={{ padding: 0, listStyle: 'none' }}
    >
      {children}
    </motion.ul>
  );
}

export function PushSubItem({ children }) {
  return (
    <motion.li
      variants={subItemVariant}
      whileHover={subItemVariant.active}
      sx={{
        variant: 'text.body.smallParagraph',
        paddingX: 4,
        paddingY: 2,
        color: 'text.primary',
        fontWeight: 400,
        '&:hover': {
          cursor: 'pointer'
        }
      }}
    >
      {children}
    </motion.li>
  );
}

export function PushItem({ children, label, description, icon, ...props }) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <motion.li variants={itemVariantShadow}>
      <motion.a
        whileHover={itemVariantShadow.active}
        onTap={() => setIsSubMenuOpen(!isSubMenuOpen)}
        style={{ boxShadow: '0px 5px 16px rgba(0, 0, 0, 0)' }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
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
        <Flex>
          <motion.span
            variants={{
              active: { scale: 1.15 }
            }}
          >
            {label}
          </motion.span>

          <span sx={{ marginLeft: 'auto' }}>
            {!icon ? <MdChevronRight /> : icon}
          </span>
        </Flex>

        {description && (
          <Text variant="body.caption" sx={{ marginTop: 3 }}>
            {description}
          </Text>
        )}
      </motion.a>

      {isSubMenuOpen && <PushSubMenu>{children}</PushSubMenu>}
    </motion.li>
  );
}
PushItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  href: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

export function PushDivider() {
  return <Divider marginX={3} />;
}

export function PushContent({ children, level }) {
  function getLevel(level) {
    if (level === 100) {
      return { variant: 'text.body.h3' };
    }

    if (level === 200) {
      return { fontSize: '18px', fontWeight: 600 };
    }
  }
  return (
    <motion.ul
      variants={menuVariant}
      initial="hidden"
      animate="show"
      exit="hidden"
      sx={{
        zIndex: 1,
        listStyle: 'none',
        margin: 0,
        padding: 0,
        ...getLevel(level)
      }}
    >
      {children}
    </motion.ul>
  );
}
PushContent.propTypes = {
  level: PropTypes.number
};
PushContent.defaultProps = {
  level: 100
};

export function PushBody({ children, isOpen, ...rest }) {
  const variant = {
    hidden: { marginLeft: '0px' },
    show: { marginLeft: `${menuWidth}px` }
  };

  return (
    <motion.div
      variants={variant}
      initial={false}
      animate={isOpen ? 'show' : 'hidden'}
      transition={menuTransition}
      sx={{ position: 'relative' }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
export function Push({ children, isOpen, onClose, behavior, addHeaderOffset }) {
  const [isCloseButtonHidden, setIsCloseButtonHidden] = useState(false);
  const variant = {
    hidden: { x: -menuWidth, opacity: 0 },
    show: { x: 0, opacity: 1 }
  };

  return (
    <>
      <PushCloseButton
        onClick={onClose}
        isHidden={isCloseButtonHidden}
        behavior={behavior}
        isOpen={isOpen}
      />

      <motion.nav
        variants={variant}
        initial={false}
        animate={isOpen ? 'show' : 'hidden'}
        transition={menuTransition}
        onHoverStart={() => setIsCloseButtonHidden(true)}
        onHoverEnd={() => setIsCloseButtonHidden(false)}
        sx={{
          position: 'fixed',
          left: 0,
          zIndex: 1,
          overflowY: 'auto',
          paddingBottom: 6,
          width: `${menuWidth}px`,
          // Offset by large `Header` cell height
          height: addHeaderOffset ? 'calc(100vh - 81px)' : '100vh',
          backgroundColor: 'background',
          boxShadow: 'hard.high',
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            width: '16px'
          },
          '&::-webkit-scrollbar-track': {
            marginY: 5
          },
          '&::-webkit-scrollbar-thumb': {
            border: '5px solid transparent',
            borderRadius: 4,
            backgroundClip: 'padding-box',
            backgroundColor: 'surface.thin'
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'surface.light'
          }
        }}
      >
        {children}
      </motion.nav>
    </>
  );
}
Push.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  behavior: PropTypes.oneOf(['ghost', 'shuffle']),
  addHeaderOffset: PropTypes.bool
};
Push.defaultProps = {
  behavior: 'shuffle'
};
