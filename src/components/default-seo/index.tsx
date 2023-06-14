import { DefaultSeo as DefaultNextSeo } from 'next-seo';
import Head from 'next/head';

const DefaultSeo = () => {
  return (
    <>
      <DefaultNextSeo
        defaultTitle="App Name - App description"
        titleTemplate="%s | App Name"
        canonical="https://www.finexs-tombola.com/"
        languageAlternates={[
          { href: 'https://www.finexs-tombola.com', hrefLang: 'fr' },
        ]}
        description="App description"
        openGraph={{
          type: 'website',
          locale: 'fr_FR',
          url: 'https://www.finexs-tombola.com/',
          images: [
            {
              url: 'https://www.finexs-tombola.com/app-preview.jpg',
              alt: 'App preview',
              type: 'image/jpeg',
              secureUrl: 'https://www.finexs-tombola.com/app-preview.jpg',
            },
          ],
          site_name: 'finexs-tombola',
        }}
        twitter={{
          handle: '@CalebElat',
          site: '@CalebElat',
          cardType: 'summary_large_image',
        }}
      />
      <Head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="finexs-tombola" />
        <meta name="apple-mobile-web-app-title" content="finexs-tombola" />
        <meta name="theme-color" content="#ffff" />
        <meta name="msapplication-navbutton-color" content="#ffff" />
        <meta name="author" content="Caleb Russel Elat" />
        <meta
          name="keywords"
          content="finexs voyage, Finexs fête ses 20 ans, tombola, lots à gagner, voitures, cameroun, tirage au sort, jeux, concours, voiture à gagner, cameroun"
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="msapplication-starturl" content="/" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
      </Head>
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-6HRCBQQZHN"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-6HRCBQQZHN');
        `}
      </Script> */}
    </>
  );
};

export { DefaultSeo };
