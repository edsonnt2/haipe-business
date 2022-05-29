import { Link, Stack } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useTranslation } from 'next-i18next';

import type { NextPage } from 'next';
import type { StackProps } from '@chakra-ui/react';

const Nav: NextPage<StackProps> = ({
  direction = 'row',
  spacing = 20,
  ...rest
}) => {
  const { t } = useTranslation('header');

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

export default Nav;
