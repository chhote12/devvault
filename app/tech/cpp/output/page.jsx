export default function CppOutput() {
    return (
      <div>
        <h1>C++ Output</h1>
  
        <p>
          The <code>cout</code> object in C++ is used to display output on the screen.
          It is part of the <code>&lt;iostream&gt;</code> library.
        </p>
  
        <h2>Example</h2>
        <pre>
          <code>{`#include <iostream>
  using namespace std;
  
  int main() {
      cout << "Welcome to C++ Output!";
      return 0;
  }`}</code>
        </pre>
  
        <h2>Output</h2>
        <pre>
          <code>{`Welcome to C++ Output!`}</code>
        </pre>
  
        <h2>Explanation</h2>
        <ul>
          <li><code>cout</code> sends the output to the console.</li>
          <li><code>&lt;&lt;</code> is the stream insertion operator.</li>
        </ul>
      </div>
    );
  }
  