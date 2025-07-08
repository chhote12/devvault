import Cpp from "./Cpp";
import './layout.css'

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
