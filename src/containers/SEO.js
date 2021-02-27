import React from 'react';
import { Head } from 'react-static';

export default function SEO({
  title,
  description,
  shouldExcludeTitleSufix = false,
  shouldIndexPage = true,
}) {
  const pageTitle = `${title} ${
    !shouldExcludeTitleSufix ? ' | Laura Ribeiro Nutricionista' : ''
  }`;

  return (
    <Head>
      <title>{pageTitle}</title>

      {description && <meta name="description" content={description} />}
      {!shouldIndexPage && <meta name="robots" content="noindex,nofollow" />}

      <meta name="referrer" content="no-referrer-when-downgrade" />
    </Head>
  );
}
