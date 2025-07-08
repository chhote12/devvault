import Cpp from "./Cpp";
import './layout.css';

// ✅ This metadata works only if this is in a layout/page file under `app/`
export const metadata = {
  title: "Learn C++ Programming | CodePrune",
  description: "Explore beginner to advanced C++ tutorials at CodePrune. Practice, build, and master C++ from scratch.",
  keywords: "C++, C++ tutorials, learn C++, C++ examples, C++ for beginners, codeprune",
  openGraph: {
    title: "Learn C++ Programming | CodePrune",
    description: "Master C++ with clear explanations, code samples, and real projects.",
    url: "https://www.codeprune.com/cpp",
    siteName: "CodePrune",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="lay">
          <div className="l">
            <Cpp />
          </div>
          <div className="r">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
