import { Button, FlexProps, HStack, Image, Link } from '@chakra-ui/react';
import { Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import NextLink from 'next/link';

import type { NextPage } from 'next';

import SEO from '@/components/SEO';
import Footer from '@/components/Footer';

const Layout: NextPage<FlexProps> = ({
  children,
  w = 'full',
  maxW = 1278,
  flex = 1,
  py = '3',
  px = '3',
  ...rest
}) => {
  const { t } = useTranslation('header');

  return (
    <Flex
      direction="column"
      align="center"
      justifyContent="center"
      minH="100vh"
    >
      <SEO title="Haipe" shouldExcludeTitleSuffix />
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
          <NextLink href="/" passHref>
            <Link>
              <Image src="/assets/logo.png" alt="Haipe" />
            </Link>
          </NextLink>

          <HStack
            as="nav"
            spacing="20"
            color="haipe.orange.700"
            fontWeight="medium"
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
          </HStack>

          <Box>
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
          </Box>
        </HStack>
      </Flex>

      <Flex as="main" flex={flex} w={w} maxW={maxW} py={py} px={px} {...rest}>
        {children}
      </Flex>

      <Footer />
    </Flex>
  );
};

export default Layout;
