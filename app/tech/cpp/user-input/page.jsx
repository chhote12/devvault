
export default function page() {
  return (
    <main className="prose prose-lg max-w-none">
  <section className="mb-12">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Basic Input with cin</h2>
    <div className="bg-blue-50 p-4 rounded-lg">
      <pre className="bg-blue-100 p-3 rounded-md overflow-x-auto">
        <code>
{`#include <iostream>
using namespace std;

int main() {
  int number;
  cout << "Enter a number: ";
  cin >> number;
  cout << "You entered: " << number;
  return 0;
}`}
        </code>
      </pre>
      <div className="mt-3 p-3 bg-white rounded-md">
        <h4 className="font-medium text-gray-800 mb-1">How it works:</h4>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li><code>cin</code> reads input until whitespace (space, tab, newline)</li>
          <li>The extraction operator <code>{`>>`}</code> converts input to the variable type</li>
          <li>Program waits at <code>cin</code> until user presses Enter</li>
        </ul>
      </div>
    </div>
  </section>

  <section className="mb-12">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Multiple Inputs</h2>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-green-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-green-800 mb-2">Chained Input</h3>
        <pre className="bg-green-100 p-3 rounded-md overflow-x-auto">
          <code>
{`int age;
double height;
cout << "Enter age and height: ";
cin >> age >> height;`}
          </code>
        </pre>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-purple-800 mb-2">Input with Prompt</h3>
        <pre className="bg-purple-100 p-3 rounded-md overflow-x-auto">
          <code>
{`cout << "Enter age: ";
cin >> age;
cout << "Enter height: ";
cin >> height;`}
          </code>
        </pre>
      </div>
    </div>
  </section>

  <section className="mb-12">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">String Input</h2>
    <div className="bg-yellow-50 p-4 rounded-lg">
      <pre className="bg-yellow-100 p-3 rounded-md overflow-x-auto">
        <code>
{`#include <string>

string name;
cout << "Enter your name: ";
cin >> name;  // Stops at first whitespace

string fullName;
cout << "Enter full name: ";
cin.ignore();  // Clear input buffer
getline(cin, fullName);  // Reads entire line`}
        </code>
      </pre>
      <div className="mt-3 p-3 bg-white rounded-md">
        <h4 className="font-medium text-gray-800 mb-1">Key Differences:</h4>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="text-left">Method</th>
              <th className="text-left">Behavior</th>
              <th className="text-left">When to Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>cin {`>>`} var</code></td>
              <td>Stops at whitespace</td>
              <td>Single words/simple input</td>
            </tr>
            <tr>
              <td><code>getline(cin, var)</code></td>
              <td>Reads entire line</td>
              <td>Strings with spaces/multi-word input</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section className="mb-12">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Input Validation</h2>
    <div className="bg-red-50 p-4 rounded-lg">
      <pre className="bg-red-100 p-3 rounded-md overflow-x-auto">
        <code>
{`int age;
while (true) {
  cout << "Enter age (1-120): ";
  if (cin >> age && age >= 1 && age <= 120) {
    break;
  }
  cout << "Invalid input!\\n";
  cin.clear();  // Clear error state
  cin.ignore(1000, '\\n');  // Discard bad input
}`}
        </code>
      </pre>
      <div className="mt-3 p-3 bg-white rounded-md">
        <h4 className="font-medium text-gray-800 mb-1">Validation Techniques:</h4>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Check stream state with <code>cin.fail()</code></li>
          <li>Clear errors with <code>cin.clear()</code></li>
          <li>Discard bad input with <code>cin.ignore()</code></li>
          <li>Range checking for numeric values</li>
        </ul>
      </div>
    </div>
  </section>

  <section className="mb-12">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Common Pitfalls</h2>
    <div className="bg-gray-100 p-4 rounded-md">
      <ul className="list-disc pl-5 space-y-3">
        <li>
          <strong>Mixing <code>cin {`>>`}</code> and <code>getline()</code>:</strong>
          <pre className="bg-gray-200 p-2 rounded mt-1 text-sm">
            <code>cin.ignore(); // Required after cin {`>>`}before getline</code>
          </pre>
        </li>
        <li>
          <strong>No input validation:</strong> Users may enter wrong data types
        </li>
        <li>
          <strong>Buffer overflow:</strong> When reading into fixed-size arrays
          <pre className="bg-gray-200 p-2 rounded mt-1 text-sm">
            <code>char name[20]; cin.getline(name, 20); // Safer than gets()</code>
          </pre>
        </li>
      </ul>
    </div>
  </section>

  <section className="mb-12">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Advanced Techniques</h2>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-indigo-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-indigo-800 mb-2">Character Input</h3>
        <pre className="bg-indigo-100 p-3 rounded-md overflow-x-auto">
          <code>
{`char ch;
cout << "Press a key: ";
ch = cin.get();  // Gets single character

cin.get(ch);    // Alternative method`}
          </code>
        </pre>
      </div>
      <div className="bg-pink-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-pink-800 mb-2">File-like Input</h3>
        <pre className="bg-pink-100 p-3 rounded-md overflow-x-auto">
          <code>
{`string line;
while (getline(cin, line)) {
  if (line.empty()) break;
  cout << "Read: " << line << endl;
}`}
          </code>
        </pre>
      </div>
    </div>
  </section>
</main>
  )
}
