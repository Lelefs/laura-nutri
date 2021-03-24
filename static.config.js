import React from 'react';
import path from 'path';

const scriptUrl =
  process.env.NODE_ENV === 'production' &&
  'https://www.googletagmanager.com/gtag/js?id=G-4E9H7YRCJG';

const gTag =
  process.env.NODE_ENV === 'production' &&
  `
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			window.dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'G-4E9H7YRCJG');
	`;

export default {
  Document: ({
    Html,
    Head,
    Body,
    children,
    state: { siteData, renderMeta },
  }) => (
    <Html lang="pt-BR">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <script src={scriptUrl} />
        <script dangerouslySetInnerHTML={{ __html: gTag }} />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
    require.resolve('react-static-plugin-styled-components'),
  ],
};
