import "./globals.css";
import Header from "./_components/Header/Header";
import { kreon } from "./fonts/fonts";
import I18nInitializer from "./_components/i18nInitializer";
import Footer from "./_components/Footer/Footer";

export const metadata = {
  title: "Chris Perrault | Portfolio",
  description: "Chris Perrault | Portfolio",
};

export default function RootLayout({ children }) {
  const font = kreon.className;
  return (
    <html lang="en">
      <body className={`${font} antialiased`}>
        <I18nInitializer>
          <Header />
          <div className="pt-24"></div>
          {children}
          <Footer />
        </I18nInitializer>
      </body>
    </html>
  );
}
