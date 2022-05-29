import { Flex, Button as ChakraButton } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

import type { NextPage } from 'next';
import type { FlexProps } from '@chakra-ui/react';

const Button: NextPage<FlexProps> = (props) => {
  const { t } = useTranslation('header');

  return (
    <Flex {...props}>
      <ChakraButton
        color="haipe.orange.800"
        bgColor="white"
        fontSize="sm"
        fontWeight="medium"
        borderColor="haipe.gray.300"
        variant="outline"
      >
        {t('i-dont-have-an-account-yet')}
      </ChakraButton>
    </Flex>
  );
};

export default Button;
