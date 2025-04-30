import Script from "next/script";

export const metadata = {
  title: {
    default: "Basic testing arena",
  },
  description: "A basic testing arena for Next.js",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    title: "Next.js",
    description: "The React Framework for the Web",
    url: "https://nextjs.org",
    siteName: "Next.js",
    images: [
      {
        url: "https://nextjs.org/og.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          // src="https://cdn.requestmetrics.com/agent/current/rm.js"
          strategy="afterInteractive"
          // data-rm-token="r3ax6ba:p8yi8qd"
          async
          // crossorigin="anonymous"
          src="https://cdn.requestmetrics.com/agent/current/rm.js"
          data-rm-token="r3ax6ba:p8yi8qd"
        />
      </body>
    </html>
  );
}
