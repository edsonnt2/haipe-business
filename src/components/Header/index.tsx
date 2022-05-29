import { useRef } from 'react';

import {
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  Box,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { FiMenu } from 'react-icons/fi';

import type { FlexProps } from '@chakra-ui/react';
import type { NextPage } from 'next';

import Logo from './Logo';
import Nav from './Nav';
import Button from './Button';

export const Header: NextPage<FlexProps> = ({ w, maxW, px }) => {
  const { t } = useTranslation('header');

  const { isOpen, onToggle, onClose } = useDisclosure();
  const btnRef = useRef<any>();

  return (
    <>
      <Flex
        as="section"
        w={w}
        h="20"
        borderBottom="1px"
        borderColor="haipe.gray.300"
        align="center"
        justifyContent="center"
      >
        <HStack
          as="header"
          w="full"
          maxW={maxW}
          px={px}
          align="center"
          justifyContent="space-between"
        >
          <IconButton
            ref={btnRef}
            display={{ base: 'flex', md: 'none' }}
            onClick={onToggle}
            icon={<FiMenu size={30} />}
            variant="ghost"
            aria-label="Button Nav of the Haipe"
          />

          <Logo />
          <Box w="10" display={{ base: 'flex', md: 'none' }} />
          <Nav display={{ base: 'none', md: 'flex' }} />
          <Button display={{ base: 'none', md: 'flex' }} />
        </HStack>
      </Flex>

      <Drawer
        placement="top"
        onClose={onClose}
        isOpen={isOpen}
        finalFocusRef={btnRef}
      >
        <DrawerContent bg="haipe.gray.100">
          <DrawerCloseButton />
          <DrawerHeader
            as={Flex}
            borderBottom="1px"
            borderColor="haipe.gray.300"
          >
            <Logo />
          </DrawerHeader>
          <DrawerBody pb={6}>
            <Nav direction="column" spacing={2} mt={2} mb={4} />
            <Button />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
