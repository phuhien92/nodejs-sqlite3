/* eslint-disable react/no-danger */
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const style = {
  margin: 0,
  backgroundColor: '#fff',
  font: '16px/1.45 "Nunito", sans-serif',
  overflowX: 'hidden',
  color: 'black',
};

class AppDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage({
      enhanceApp: App => props => sheet.collectStyles( <App {...props} /> )
    });
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
          <meta
            name="description"
            content="This App is a free and open source URL shortener with custom domains and stats."
          />
          <link
            href="https://fonts.googleapis.com/css?family=Nunito:300,400,700"
            rel="stylesheet"
          />
          <link rel="icon" sizes="196x196" href="/images/favicon-196x196.png" />
          <link rel="icon" sizes="32x32" href="/images/favicon-32x32.png" />
          <link rel="icon" sizes="16x16" href="/images/favicon-16x16.png" />
          <link rel="apple-touch-icon" href="/images/favicon-196x196.png" />
          <link rel="mask-icon" href="/images/icon.svg" color="blue" />
          {this.props.styleTags}
        </Head>
        <body style={style}>
          <Main/>
          <div id="modal-root"></div>
          <NextScript />
        </body>
      </html>
    );
  }
}

export default AppDocument;
