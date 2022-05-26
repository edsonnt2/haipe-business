import type { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout from '@/components/Layout';

const Home: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <h1>{t('hello-world')}</h1>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common', 'header'])),
    },
  };
};

export default Home;
