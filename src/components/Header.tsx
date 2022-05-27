import { useRef } from 'react';
import NextLink from 'next/link';
import {
  Flex,
  Button,
  HStack,
  Image,
  Link,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  Box,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { FiMenu } from 'react-icons/fi';

import type { FlexProps, StackProps } from '@chakra-ui/react';
import type { WithTranslation } from 'next-i18next';
import type { NextPage } from 'next';

const DesktopNav = ({
  t,
  direction = 'row',
  spacing = 20,
  ...rest
}: Omit<WithTranslation, 'i18n' | 'tReady'> & StackProps) => {
  return (
    <Stack
      direction={direction}
      as="nav"
      spacing={spacing}
      color="haipe.orange.700"
      fontWeight="medium"
      align="start"
      {...rest}
    >
      <NextLink href="/como-funciona" passHref>
        <Link>{t('how-it-works')}</Link>
      </NextLink>
      <NextLink href="/planos" passHref>
        <Link>{t('plans')}</Link>
      </NextLink>
      <NextLink href="/contato" passHref>
        <Link>{t('contact')}</Link>
      </NextLink>
    </Stack>
  );
};

const Logo = () => {
  return (
    <NextLink href="/" passHref>
      <Link>
        <Image src="/assets/logo.png" alt="Haipe" />
      </Link>
    </NextLink>
  );
};

const ButtonLogin = ({
  t,
  ...rest
}: Omit<WithTranslation, 'i18n' | 'tReady'> & FlexProps) => {
  return (
    <Flex {...rest}>
      <Button
        color="haipe.orange.800"
        bgColor="white"
        fontSize="sm"
        fontWeight="medium"
        borderColor="haipe.gray.300"
        variant="outline"
      >
        {t('i-dont-have-an-account-yet')}
      </Button>
    </Flex>
  );
};

export const HeaderOld: NextPage<FlexProps> = ({ w, maxW, px }) => {
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
          <Logo />

          <DesktopNav t={t} display={{ base: 'none', md: 'flex' }} />

          <ButtonLogin t={t} display={{ base: 'none', md: 'flex' }} />

          <IconButton
            ref={btnRef}
            display={{ base: 'flex', md: 'none' }}
            onClick={onToggle}
            icon={<FiMenu size={30} />}
            variant="ghost"
            aria-label="Button Nav of the Haipe"
          />
        </HStack>
      </Flex>

      <Drawer
        placement="top"
        onClose={onClose}
        isOpen={isOpen}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
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
            <DesktopNav t={t} direction="column" spacing={2} mt={2} mb={4} />
            <ButtonLogin t={t} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default HeaderOld;
