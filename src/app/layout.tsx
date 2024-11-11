import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "./registry";
import 'bootstrap-icons/font/bootstrap-icons.css';

export const metadata: Metadata = {
  title: "Zaori Stock",
  description: "Sistema de gerenvcimento de estoque",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
