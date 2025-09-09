import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteSidebar } from '@/components/site-sidebar';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'EduImmerse Ghana',
  description:
    'Integrating Virtual Reality into Ghanaian education to foster experiential learning.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <div className="relative flex min-h-screen w-full">
          <SiteSidebar />
          <div className="flex flex-1 flex-col pl-14">
            <SiteHeader />
            <main className="flex-1 p-4 sm:p-6 md:p-8">{children}</main>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
