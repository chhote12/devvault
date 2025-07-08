// app/layout.js
import './layout.css';
import Cpp from './Cpp';

export const metadata = {
  title: 'Learn C++ Programming | CodePrune',
  description: 'Master C++ programming with free tutorials and examples.',
  keywords: ['C++', 'programming', 'tutorial', 'codeprune'],
  openGraph: {
    type: 'website',
    title: 'Learn C++ Programming | CodePrune',
    description: 'Free C++ tutorials for beginners to advanced',
    url: 'https://codeprune.com',
    siteName: 'CodePrune',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Learn C++ Programming | CodePrune',
    description: 'Free C++ tutorials for beginners to advanced',
  },
  metadataBase: new URL('https://codeprune.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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