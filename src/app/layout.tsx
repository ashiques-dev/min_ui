import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/them-provider";
import { Navbar, NavBarItems } from "@/components/navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "min.ui",
  description: "Developed by ASQE",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased font-inter text-sm bg-background text-foreground width`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <section className="border-l border-r border-b rounded-b-md mt-16 divide-x lg:grid lg:grid-cols-12">
            <aside className="max-h-[calc(100vh-3.5rem)] overflow-y-auto sticky top-16 py-10 padding hidden lg:flex flex-col items-start gap-2 lg:col-span-3 xl:col-span-2">
              <NavBarItems />
            </aside>
            <main className="min-h-[75vh] padding pt-14 pb-10 lg:col-span-9 xl:col-span-10">
              {children}
            </main>
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}
