import { Flex, Image, VStack, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Footer: NextPage = () => {
  return (
    <Flex
      as="footer"
      w="100%"
      align="center"
      py="6"
      justify="center"
      color="white"
    >
      <Image src="./assets/logo-haipe-white.png" alt="haipe" w={30} />
      <VStack spacing={0} align="start" ml="3">
        <Text fontSize="small">© 2022 haipe.</Text>
        <Text fontSize="small">Todos os direitos reservados.</Text>
      </VStack>
    </Flex>
  );
};

export default Footer;
