import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { HeaderMenu } from '@/components/HeaderMenu/HeaderMenu';
import { FooterMenu } from '@/components/FooterMenu/FooterMenu';

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