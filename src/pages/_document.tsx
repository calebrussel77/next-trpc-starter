import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fr" className="scroll-smooth">
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <body className="scroll-smooth border-t-4 border-green-500 text-gray-800 bg-white font-sans text-base h-screen antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
