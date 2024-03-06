import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { HeaderMenu } from '@/components/HeaderMenu/HeaderMenu';
import { FooterMenu } from '@/components/FooterMenu/FooterMenu';
import Script from 'next/script';

export const metadata = {
  title: {
    default: "SetMyTrip: The Trips Just Planned for You",
    template: "%s - SetMyTrip"
  },
  description: 'The most comprehensive itineraries on your fingertips.',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />

        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-JPL0J1NSK8"></Script>
        <Script id='google-analytics'>
          {
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-JPL0J1NSK8');`
          }
        </Script>
      </head>
      <body>
        <MantineProvider>
          <HeaderMenu />
          <main>
            {children}
          </main>
          <FooterMenu />
        </MantineProvider>
      </body>
    </html>
  );
}