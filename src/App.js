import React from 'react';
import { Head, Root, Routes } from 'react-static';
import { Router } from 'components/Router';

import BtnWhatsApp from './containers/BtnWhatsApp';
import Footer from './containers/Footer';

import GlobalStyle from './styles/globalStyles';
import { MainContent } from './styles/App.styles';

import iconImg from './assets/favicon.ico';

function App() {
  return (
    <Root>
      <Head>
        <link rel="icon" href={iconImg} />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <MainContent>
        <div className="content" role="main">
          <React.Suspense fallback={<em>Carregando...</em>}>
            <Router>
              <Routes path="*" />
            </Router>
          </React.Suspense>
          <BtnWhatsApp />
        </div>
        <Footer />
      </MainContent>
      <GlobalStyle />
    </Root>
  );
}

export default App;
