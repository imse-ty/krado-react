import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import {
  MdLaunch,
  MdLink,
  MdExpandMore,
  MdMenu,
  MdSearch
} from 'react-icons/md';
import {
  Push,
  PushBody,
  PushContent,
  PushDivider,
  PushHeader,
  PushItem,
  PushLabel,
  PushSubItem
} from './Push';
import {
  Header,
  HeaderAvatar,
  HeaderBody,
  HeaderIconButton,
  HeaderItem,
  HeaderNavigation,
  HeaderTitle
} from '../Header/Header';
import {
  Footer,
  FooterContent,
  FooterFootnote,
  FooterItem
} from '../Footer/Footer';
import Text from '../Text/Text';
import Container from '../Container/Container';

export default {
  title: 'Push',
  component: Push
};

function PageHeader() {
  return (
    <Header>
      <HeaderIconButton>
        <MdMenu />
      </HeaderIconButton>
      <HeaderTitle sx={{ textTransform: 'uppercase' }}>Kràdoyé</HeaderTitle>
      <HeaderBody>
        <HeaderNavigation>
          <HeaderItem href="#">Home</HeaderItem>
          <HeaderItem href="#">Strategy</HeaderItem>
          <HeaderItem href="#">Design</HeaderItem>
          <HeaderItem href="#">About</HeaderItem>
          <HeaderItem href="#">Help</HeaderItem>
        </HeaderNavigation>
        <HeaderIconButton>
          <MdSearch />
        </HeaderIconButton>
        <HeaderAvatar />
      </HeaderBody>
    </Header>
  );
}

function PageFooter() {
  return (
    <Footer>
      <FooterFootnote>
        2021 Akrade, LLC. By Akrade & Company. All Rights Reserved.
      </FooterFootnote>
      <FooterContent>
        <FooterItem href="#">Terms of Use</FooterItem>
        <FooterItem href="#">Akrade Privacy Policy</FooterItem>
      </FooterContent>
    </Footer>
  );
}

function PushExampleContent() {
  const [activeMenu, setActiveMenu] = useState('main');

  return (
    <>
      <AnimatePresence mode="wait">
        {activeMenu === 'main' && (
          <PushContent key="main">
            <PushLabel>Overview</PushLabel>
            <PushItem label="Getting Started" />
            <PushItem label="About" />
            <PushItem label="Support" />
            <PushDivider />
            <PushLabel>Foundation</PushLabel>
            <PushItem label="Identity" />
            <PushItem label="Accessibility" />
            <PushLabel>Web & App</PushLabel>
            <PushItem label="Desktop" />
            <PushItem label="Web" />
            <PushItem label="Tablet" />
            <PushItem label="Mobile" onClick={() => setActiveMenu('mobile')} />
            <PushItem label="Wearables" />
            <PushItem label="Print" />
            <PushDivider />
            <PushLabel>Virtual</PushLabel>
            <PushItem label="Virtual Reality" />
            <PushItem label="Augmented Reality" />
            <PushItem label="Games" />
            <PushDivider />
            <PushLabel>Broadcast</PushLabel>
            <PushItem label="Television" />
            <PushItem label="Video" />
            <PushItem label="Voice" />
            <PushLabel>Graphics</PushLabel>
            <PushItem label="Print" />
            <PushItem label="Outdoor" />
            <PushDivider />
            <PushItem href="#" icon={<MdLink />} label="Internal Link" />
            <PushItem
              href="https://example.com"
              target="_blank"
              rel="noopener"
              icon={<MdLaunch />}
              label="External Link"
            />
          </PushContent>
        )}

        {activeMenu === 'mobile' && (
          <PushContent level={200} key="mobile">
            <PushHeader
              onClick={() => setActiveMenu('main')}
              description="The fundemental building blocks of the design system."
            >
              Mobile
            </PushHeader>
            <PushDivider />
            <PushItem onClick={() => setActiveMenu('core')} label="Core" />
            <PushItem label="Advertising" />
            <PushItem label="Chat" />
            <PushItem label="Email" />
            <PushItem label="Food" />
            <PushItem label="Publish" />
            <PushItem label="Shop" />
            <PushItem label="Social Media" />
            <PushItem label="Survey" />
            <PushItem label="Security" />
          </PushContent>
        )}

        {activeMenu === 'core' && (
          <PushContent level={200} key="core">
            <PushHeader
              onClick={() => setActiveMenu('mobile')}
              description="The fundemental building blocks of the design system."
            >
              Core
            </PushHeader>
            <PushDivider />
            <PushLabel>Global</PushLabel>
            <PushItem label="iOS" icon={<MdExpandMore />}>
              <PushSubItem>Keyboards</PushSubItem>
              <PushSubItem>Alerts</PushSubItem>
              <PushSubItem>Pickers</PushSubItem>
              <PushSubItem>Notifications</PushSubItem>
              <PushSubItem>Lockscreens</PushSubItem>
              <PushSubItem>Edit Menus</PushSubItem>
              <PushSubItem>Devices</PushSubItem>
            </PushItem>
            <PushItem label="Grids" />
            <PushItem label="Header" />
            <PushItem
              label="Footer"
              description="The fundemental building blocks of the design system."
            />
            <PushItem label="Search" />
            <PushDivider />
            <PushLabel>Style</PushLabel>
            <PushItem label="Icons" />
            <PushItem label="Illustrations" />
            <PushItem label="Spacing" />
            <PushItem label="Typography" />
          </PushContent>
        )}
      </AnimatePresence>
    </>
  );
}

function PageContent() {
  return (
    <Container sx={{ paddingY: 4, height: '2000px' }}>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies tellus
        etiam, posuere ornare platea sollicitudin netus nostra eget quisque odio
        proin, maecenas sapien congue natoque eros vel nibh fermentum tortor.
        Quam nisl commodo curae orci class dapibus ante cubilia, bibendum purus
        torquent lectus cursus nulla luctus, sollicitudin vel id posuere nisi
        varius senectus. Dapibus ultrices sociis platea habitasse dictumst
        posuere taciti nibh ante, pulvinar ligula lacinia ridiculus enim aliquet
        interdum laoreet quam imperdiet, turpis gravida convallis ut id rutrum
        aliquam justo. Lectus integer etiam posuere eu cubilia arcu tristique,
        neque porttitor in mattis ac ultricies, lacinia consequat laoreet
        viverra duis nisl. Tristique facilisis aliquet feugiat ac platea gravida
        natoque, habitant suspendisse nibh montes iaculis vehicula, semper
        rhoncus metus vel nec fames. Euismod a cras fringilla vivamus, odio
        pulvinar nostra.
      </Text>
    </Container>
  );
}

function PushMenu() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Push isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} behavior="ghost">
        <PushExampleContent />
      </Push>
      <PushBody isOpen={isOpen}>
        <PageContent />
      </PushBody>
    </>
  );
}

export function Default() {
  return <PushMenu />;
}

export function WithHeaderAndFooter() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <PageHeader />
      <Push
        isOpen={isOpen}
        onClose={() => setIsOpen(!isOpen)}
        behavior="ghost"
        addHeaderOffset
      >
        <PushExampleContent />
      </Push>
      <PushBody isOpen={isOpen}>
        <PageContent />
        <PageFooter />
      </PushBody>
    </>
  );
}
