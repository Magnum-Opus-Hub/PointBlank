import './globals.css'
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'PointBlank - Design & Development-as-a-Service',
  description: 'PointBlank offers hassle-free Design and Development-as-a-Service. Ideal for startups and enterprises looking to scale. Flexible plans, top 1% talent, and quick turnaround.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="URL_TO_IMAGE" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

