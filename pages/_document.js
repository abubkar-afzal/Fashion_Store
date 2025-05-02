import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased bg-[url('/bg.png')] bg-no-repeat bg-cover bg-fixed " >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
