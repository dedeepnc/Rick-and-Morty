import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import '../styles/globals.css';

const GA_MEASUREMENT_ID = 'G-FFDC17DYLF';

const handleRouteChange = (url) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
