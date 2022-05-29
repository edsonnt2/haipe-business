import type { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import {
  Box,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';

import Layout from '@/components/Layout';

const Home: NextPage = () => {
  const { t } = useTranslation('home');

  return (
    <Layout
      as={SimpleGrid}
      columns={{ base: 1, md: 2 }}
      spacing={{ base: 10, lg: '16' }}
      py={{ base: 10, sm: 12, md: '20', lg: '24' }}
    >
      <VStack align="start" spacing={{ base: 6, md: 12 }}>
        <Heading
          lineHeight={1.1}
          fontSize={{ base: '3xl', sm: '4xl', md: '40px' }}
          pr={{ base: 0, md: '10', lg: '16' }}
        >
          {t('be-a-partner-have-new-customers-and-control-your-business')}
        </Heading>

        <Text fontSize={{ base: 'xl', sm: '2xl', md: '2xl' }}>
          {t('the-simplest-way-to-connect-people-and-companies')}
        </Text>
      </VStack>

      <Stack spacing="8">
        <Stack spacing={4}>
          <Heading
            color={'gray.800'}
            lineHeight={1.1}
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
          >
            Join our team
            <Text
              as={'span'}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >
              !
            </Text>
          </Heading>
          <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
            We’re looking for amazing engineers just like you! Become a part of
            our rockstar engineering team and skyrocket your career!
          </Text>
        </Stack>
        <Box as={'form'} mt={10}>
          <Stack spacing={4}>
            <Input
              placeholder="Firstname"
              bg={'gray.100'}
              border={0}
              color={'gray.500'}
              _placeholder={{
                color: 'gray.500',
              }}
            />
            <Input
              placeholder="firstname@lastname.io"
              bg={'gray.100'}
              border={0}
              color={'gray.500'}
              _placeholder={{
                color: 'gray.500',
              }}
            />
            <Input
              placeholder="+1 (___) __-___-___"
              bg={'gray.100'}
              border={0}
              color={'gray.500'}
              _placeholder={{
                color: 'gray.500',
              }}
            />
            <Button fontFamily={'heading'} bg={'gray.200'} color={'gray.800'}>
              Upload CV
            </Button>
          </Stack>
          <Button
            fontFamily={'heading'}
            mt={8}
            w={'full'}
            bgGradient="linear(to-r, red.400,pink.400)"
            color={'white'}
            _hover={{
              bgGradient: 'linear(to-r, red.400,pink.400)',
              boxShadow: 'xl',
            }}
          >
            Submit
          </Button>
        </Box>
      </Stack>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['home', 'header'])),
    },
  };
};

export default Home;
