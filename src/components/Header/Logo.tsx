import { Link, Image } from '@chakra-ui/react';
import NextLink from 'next/link';

import type { NextPage } from 'next';

const Logo: NextPage = () => {
  return (
    <NextLink href="/" passHref>
      <Link>
        <Image src="/assets/logo.png" alt="Haipe" />
      </Link>
    </NextLink>
  );
};

export default Logo;
