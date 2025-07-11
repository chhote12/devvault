

import C from "./C";
import "./layout.css"
export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <div>
          <div className="c-l"> 
             <C></C>
             </div>
            <div className="c-r">
            {children}
            </div>
          </div>
        </body>
      </html>
    );
  }
  
