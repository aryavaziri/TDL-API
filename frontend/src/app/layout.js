import "./globals.css";
import Provider from "@app/Provider";
import Nav from "@components/Nav";
import { Oswald, MuseoModerno, Agdasima, Inconsolata } from "next/font/google";

export const metadata = {
  title: "Arya's Website",
  description: "Created by Arya",
};

const oswald = Oswald({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${oswald.className} relative text-arya3 dark:text-light`}
      >
        <Provider>
          <Nav />
          {/* <main className="px-2 sm:px-12 md:px-24 flex flex-col h-full"> */}
          <main className="px-2 sm:px-12 md:px-24 flex flex-col h-full bg-gradient-to-b from-30% dark:from-5% dark:from-[#023e8a70] from-arya2 to-80% dark:to-50% to-transparent">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
