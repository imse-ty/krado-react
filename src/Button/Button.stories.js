import Button from './Button';
import { MdOutlineEmail, MdArrowForward } from 'react-icons/md';
import Flex from '../Flex/Flex';

const Wrapper = ({ ...props }) => (
  <Flex
    sx={{ alignItems: 'center', justifyContent: 'center', padding: 4, gap: 4 }}
    {...props}
  />
);

export default {
  title: 'Button',
  component: Button
};

export const Basic = (args) => (
  <Wrapper>
    <Button {...args} />
  </Wrapper>
);
Basic.args = {
  children: 'Button'
};

export const Variants = () => (
  <Wrapper>
    <Button variant="solid">Solid</Button>
    <Button variant="text">Text</Button>
    <Button variant="ghost">Ghost</Button>
  </Wrapper>
);

export const Sizes = () => (
  <Wrapper>
    <Button size="large">Large</Button>
    <Button size="small">Small</Button>
  </Wrapper>
);

export const Disabled = () => (
  <Wrapper>
    <Button variant="solid" disabled>
      Solid
    </Button>
    <Button variant="text" disabled>
      Text
    </Button>
    <Button variant="ghost" disabled>
      Ghost
    </Button>
  </Wrapper>
);

export const Icon = () => (
  <Wrapper>
    <Button size="small" leftIcon={<MdOutlineEmail sx={{ fontSize: 5 }} />}>
      Email
    </Button>
    <Button
      variant="ghost"
      size="small"
      rightIcon={<MdArrowForward sx={{ fontSize: 5 }} />}
    >
      Call us
    </Button>
  </Wrapper>
);
