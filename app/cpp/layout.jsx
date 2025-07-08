import Cpp from "./Cpp";
import './layout.css'

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

export default function RoowtLayout({ children }) {


  
  return (
    <div className="lay">
        <div className="l">
            <Cpp></Cpp>
           
        </div>
        <div className="r">
            {children}
        </div>
    </div>
  );
}
