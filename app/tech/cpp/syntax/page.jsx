
export default function Page() {
    return (
      <div>
        <h1>C++ Syntax</h1>
  
        <p>
          C++ syntax refers to the rules that define how a C++ program is written
          and interpreted by the compiler. Understanding basic syntax is essential
          for writing correct and readable code.
        </p>
  
        <h2>Basic Structure of a C++ Program</h2>
  
        <pre>
          <code>{`
  #include <iostream>
  using namespace std;
  
  int main() {
      cout << "Hello, World!";
      return 0;
  }
          `}</code>
        </pre>
  
        <h2>Explanation</h2>
        <ul>
          <li>
            <code>#include &lt;iostream&gt;</code>: Includes the standard input-output
            stream library.
          </li>
          <li>
            <code>using namespace std;</code>: Lets you use standard C++ classes/functions
            without the <code>std::</code> prefix.
          </li>
          <li>
            <code>int main()</code>: The entry point of every C++ program.
          </li>
          <li>
            <code>cout</code>: Used for printing output to the console.
          </li>
          <li>
            <code>return 0;</code>: Ends the program and returns 0 to the system.
          </li>
        </ul>
  
        <h2>Semicolons and Braces</h2>
        <p>
          Each statement in C++ ends with a semicolon (<code>;</code>). Code blocks
          are enclosed in curly braces <code>{'{}'}</code>.
        </p>
  
        <h2>Comments</h2>
        <pre>
          <code>{`// This is a single-line comment
  
  /*
    This is a
    multi-line comment
  */`}</code>
        </pre>
  
        <h2>Case Sensitivity</h2>
        <p>
          C++ is case-sensitive. For example, <code>main</code> and <code>Main</code>{' '}
          are treated as different identifiers.
        </p>
  
        <h2>Whitespace</h2>
        <p>
          Whitespace (spaces, tabs, newlines) is ignored by the compiler but should be
          used to improve code readability.
        </p>
      </div>
    );
  }
  