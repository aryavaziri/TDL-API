import "./globals.css";
import Nav from "@components/Nav";
import Provider from "@app/Provider";

export const metadata = {
  title: "TDL | created by next.js and express.js",
  description: "Created by Arya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <main className="px-2 sm:px-12 md:px-20">
          <Provider>
            <Nav />
            {children}
          </Provider>
        </main>
      </body>
    </html>
  );
}
