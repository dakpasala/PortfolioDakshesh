import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dakshesh's Portfolio",
  description: "Minimal Modern Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={inter.className}
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "sans-serif",
          backgroundColor: "black", // Minimal fallback background
          color: "white", // Minimal fallback text color
        }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div
            style={{
              display: "flex",
              minHeight: "100vh",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {children || <h1>Loading...</h1>} {/* Fallback for missing children */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
