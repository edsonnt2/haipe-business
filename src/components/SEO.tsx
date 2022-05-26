import { useMemo } from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';

interface SeoProps {
  title: string;
  description?: string;
  shouldExcludeTitleSuffix?: boolean;
  shouldNotIndexPage?: boolean;
}

const SEO: NextPage<SeoProps> = ({
  title,
  description,
  shouldExcludeTitleSuffix = false,
  shouldNotIndexPage = false,
}) => {
  const pageTitle = useMemo(
    () => `${title}${!shouldExcludeTitleSuffix ? ' | haipe' : ''}`,
    [title, shouldExcludeTitleSuffix]
  );

  return (
    <Head>
      <title>{pageTitle}</title>

      {description && <meta name="description" content={description} />}
      {!shouldNotIndexPage && <meta name="robots" content="noindex,nofollow" />}
    </Head>
  );
};

export default SEO;
