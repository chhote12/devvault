export default function CppComments() {
    return (
      <div>
        <h1>C++ Comments</h1>
  
        <p>
          Comments are used to explain C++ code and make it more readable. Comments are ignored by the compiler.
          C++ supports:
        </p>
  
        <ul>
          <li><strong>Single-line comments</strong> — start with <code>//</code></li>
          <li><strong>Multi-line comments</strong> — start with <code>/*</code> and end with <code>*/</code></li>
        </ul>
  
        <h2>Example</h2>
        <pre>
          <code>{`#include <iostream>
  using namespace std;
  
  int main() {
      // This is a single-line comment
      cout << "Hello!" << endl;
  
      /*
        This is a multi-line comment.
        It spans multiple lines.
      */
      cout << "This is C++." << endl;
  
      return 0;
  }`}</code>
        </pre>
  
        <h2>Output</h2>
        <pre>
          <code>{`Hello!
  This is C++.`}</code>
        </pre>
  
        <h2>Explanation</h2>
        <ul>
          <li><code>//</code> is used for single-line comments.</li>
          <li><code>/* ... */</code> is used to write multi-line comments.</li>
          <li>Comments do not affect the actual output.</li>
        </ul>
      </div>
    );
  }
  