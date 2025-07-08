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
      <body >
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
