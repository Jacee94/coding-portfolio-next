import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { JssProvider, SheetsRegistry, createGenerateId } from 'react-jss';
export default class JssDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"} />
          <link href="https://fonts.googleapis.com/css2?family=Secular+One&family=Source+Code+Pro&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main/>
          <NextScript />
        </body>
      </Html>
    )
  }
}

JssDocument.getInitialProps = async (ctx) => {
  const sheetsManager = new Map();
  const registry = new SheetsRegistry();
  const generateId = createGenerateId();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => (
        <JssProvider sheetsManager={sheetsManager} registry={registry} generateId={generateId}>
          <App {...props} />
        </JssProvider>
      ),
    });

  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      <style id="jss-server-side" dangerouslySetInnerHTML={{ __html: registry.toString() }} />,
    ],
  };
};