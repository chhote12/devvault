import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="8FZvJ7XDE5e4SYoNe_Pcpx7jzI-UL-2lSt6jXXuOBi8"
        />
      </head>
      <body>
        <div className="container">
          <img src="../public/logo.png" alt="Logo" className="logo" />
          <div className="text-info">
            <div className="title">codeprune.com</div>
            <div className="link">https://www.codeprune.com</div>
          </div>
        </div>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
