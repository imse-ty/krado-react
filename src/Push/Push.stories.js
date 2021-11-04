import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Push, {
  PushContent,
  PushDivider,
  PushHeader,
  PushItem,
  PushLabel
} from './Push';
import Text from '../Text/Text';
import Flex from '../Flex/Flex';
import Box from '../Box/Box';
import { MdLaunch, MdLink } from 'react-icons/md';

export default {
  title: 'Push',
  component: Push
};

export function Default() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('main');

  return (
    <Flex>
      <Push isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} behavior="ghost">
        <AnimatePresence>
          {activeMenu === 'main' && (
            <PushContent>
              <PushItem>Identity</PushItem>
              <PushItem>Desktop</PushItem>
              <PushItem>Web</PushItem>
              <PushItem onClick={() => setActiveMenu('mobile')}>
                Mobile
              </PushItem>
              <PushItem>Tablet</PushItem>
              <PushItem>Print</PushItem>
              <PushItem>Television</PushItem>
              <PushItem>Voice</PushItem>
              <PushItem href="#" icon={<MdLink />}>
                VR/AR
              </PushItem>
              <PushItem
                href="https://example.com"
                target="_blank"
                rel="noopener"
                icon={<MdLaunch />}
              >
                Wearables
              </PushItem>
            </PushContent>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {activeMenu === 'mobile' && (
            <PushContent level={200}>
              <PushHeader onClick={() => setActiveMenu('main')}>
                Mobile
              </PushHeader>
              <PushItem onClick={() => setActiveMenu('core')}>Core</PushItem>
              <PushItem>Advertising</PushItem>
              <PushItem>Chat</PushItem>
              <PushItem>Email</PushItem>
              <PushItem>Food</PushItem>
              <PushItem>Publish</PushItem>
              <PushItem>Shop</PushItem>
              <PushItem>Social Media</PushItem>
              <PushItem>Survey</PushItem>
              <PushItem>Security</PushItem>
            </PushContent>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {activeMenu === 'core' && (
            <PushContent level={200}>
              <PushHeader onClick={() => setActiveMenu('mobile')}>
                Core
              </PushHeader>
              <PushDivider />
              <PushLabel>Global</PushLabel>
              <PushItem>iOS</PushItem>
              <PushItem>Grids</PushItem>
              <PushItem>Header</PushItem>
              <PushItem>Footer</PushItem>
              <PushItem>Search</PushItem>
              <PushDivider />
              <PushLabel>Style</PushLabel>
              <PushItem>Icons</PushItem>
              <PushItem>Illustrations</PushItem>
              <PushItem>Spacing</PushItem>
              <PushItem>Typography</PushItem>
            </PushContent>
          )}
        </AnimatePresence>
      </Push>

      <Box paddingX={6}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies
          tellus etiam, posuere ornare platea sollicitudin netus nostra eget
          quisque odio proin, maecenas sapien congue natoque eros vel nibh
          fermentum tortor. Quam nisl commodo curae orci class dapibus ante
          cubilia, bibendum purus torquent lectus cursus nulla luctus,
          sollicitudin vel id posuere nisi varius senectus. Dapibus ultrices
          sociis platea habitasse dictumst posuere taciti nibh ante, pulvinar
          ligula lacinia ridiculus enim aliquet interdum laoreet quam imperdiet,
          turpis gravida convallis ut id rutrum aliquam justo. Lectus integer
          etiam posuere eu cubilia arcu tristique, neque porttitor in mattis ac
          ultricies, lacinia consequat laoreet viverra duis nisl. Tristique
          facilisis aliquet feugiat ac platea gravida natoque, habitant
          suspendisse nibh montes iaculis vehicula, semper rhoncus metus vel nec
          fames. Euismod a cras fringilla vivamus, odio pulvinar nostra. Et
          aliquet varius euismod nam rutrum taciti fusce quam pharetra, sed
          blandit mus congue magna per ut urna ante sociis, bibendum nisl sem
          aenean aliquam laoreet tincidunt aptent. Porta vestibulum nunc iaculis
          etiam elementum nisi curae cubilia vel fermentum cras a quisque massa
          luctus, dignissim lectus eget litora orci pretium aenean montes ligula
          fames augue gravida laoreet. Urna aliquet ultrices magnis eget
          phasellus laoreet ante cras malesuada dui purus eu mollis, odio
          praesent facilisis eleifend senectus in egestas tortor est augue
          ultricies habitant. Luctus suscipit iaculis posuere diam ligula vel
          orci condimentum faucibus, etiam commodo facilisis tellus euismod
          pulvinar facilisi natoque, odio imperdiet himenaeos sapien convallis
          sodales tempus accumsan. Vehicula posuere placerat in lacinia, ac
          tincidunt. Suspendisse malesuada dictumst risus posuere felis leo
          enim, venenatis mollis aliquam ac at hendrerit, sagittis primis magna
          egestas neque pharetra. Et at ultricies in nam nibh, malesuada nunc
          dignissim litora, dapibus lectus mauris montes. Nulla magna euismod at
          aenean suscipit mi mollis, duis id dictumst potenti nisi malesuada,
          urna nam varius est lectus a. Nascetur magna fusce molestie malesuada
          natoque elementum, mi sem cum nibh venenatis, congue tristique iaculis
          at euismod. Porta gravida velit nascetur tristique fusce est felis,
          tincidunt placerat vivamus turpis eleifend faucibus aliquet semper,
          cubilia tellus proin facilisi urna vehicula. Ultricies dictumst
          aliquet imperdiet tellus nunc vehicula, dictum posuere cras ultrices
          torquent. Ullamcorper libero eu semper vulputate malesuada in pharetra
          enim, consequat dapibus neque sodales eleifend blandit aenean turpis
          quam, venenatis donec potenti fermentum rhoncus dis risus. Torquent
          bibendum lacus sociis fames interdum augue neque convallis mollis
          litora placerat tempor cursus ullamcorper ut, est per praesent morbi
          vulputate metus risus facilisis vestibulum nascetur auctor taciti
          tellus.
        </Text>
      </Box>
    </Flex>
  );
}
