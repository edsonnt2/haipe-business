import { Flex } from '@chakra-ui/react';

import type { NextPage } from 'next';
import type { FlexProps } from '@chakra-ui/react';

import SEO from '@/components/SEO';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Layout: NextPage<FlexProps> = ({
  children,
  w = 'full',
  maxW = 1278,
  flex = 1,
  py = '3',
  px = '3',
  ...rest
}) => {
  return (
    <Flex
      direction="column"
      align="center"
      justifyContent="center"
      minH="100vh"
    >
      <SEO title="Haipe" shouldExcludeTitleSuffix />

      <Header maxW={maxW} w={w} px={px} />

      <Flex as="main" flex={flex} w={w} maxW={maxW} py={py} px={px} {...rest}>
        {children}
      </Flex>

      <Footer />
    </Flex>
  );
};

export default Layout;
