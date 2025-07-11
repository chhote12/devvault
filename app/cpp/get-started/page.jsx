
import './page.css'
export default function page() {
  return (
    <div className="main">
       <main className="content">
        <h1>Introduction to C++</h1>
        
        <section>
          <h2>What is C++?</h2>
          <p>C++ is a general-purpose programming language created by Bjarne Stroustrup...</p>
        </section>
        
        <section>
          <h2>First C++ Program</h2>
          <pre>
            <code>{`#include <iostream>
using namespace std;

int main() {
  cout << "Hello World!";
  return 0;
}`}</code>
          </pre>
          <p>This program demonstrates:</p>
          <ul>
            <li><code>#include</code> directive for headers</li>
            <li><code>main()</code> function as entry point</li>
            <li><code>cout</code> for output</li>
          </ul>
        </section>
      </main>
    </div>
  )
}
