// pages/cpp/variables.js
import Head from 'next/head';

export default function CppVariables() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Head>
        <title>C++ Variables - Programming Reference</title>
        <meta name="description" content="Learn about variables in C++ programming language" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">C++ Variables</h1>
          <p className="mt-4 text-xl text-gray-600">
            Understanding variables is fundamental to programming in C++
          </p>
        </header>

        <main className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What is a Variable?</h2>
            <p>
              In C++, a variable is a named storage location in memory that holds a value of a specific data type. 
              Variables allow you to store and manipulate data in your programs.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Variable Declaration</h2>
            <p>
              To declare a variable in C++, you specify its type followed by its name:
            </p>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code>
{`int age;            // Declares an integer variable named 'age'
double price;       // Declares a double-precision floating-point variable
char initial;       // Declares a character variable`}
              </code>
            </pre>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Variable Initialization</h2>
            <p>
              You can initialize variables when you declare them:
            </p>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code>
{`int score = 100;           // Initialized with value 100
double pi = 3.14159;       // Initialized with pi value
char grade = 'A';          // Initialized with character 'A'
bool is_valid = true;      // Initialized with boolean true`}
              </code>
            </pre>
            <p className="mt-4">
              C++11 introduced uniform initialization using braces:
            </p>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code>
{`int count{10};          // Initialized with value 10
double temperature{36.6}; // Initialized with 36.6
char letter{'B'};        // Initialized with 'B'`}
              </code>
            </pre>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Fundamental Data Types</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size (bytes)</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Range</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Example</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-mono">int</td>
                    <td className="px-6 py-4">Integer numbers</td>
                    <td className="px-6 py-4">4</td>
                    <td className="px-6 py-4">-2,147,483,648 to 2,147,483,647</td>
                    <td className="px-6 py-4 font-mono">int count = 42;</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-mono">short</td>
                    <td className="px-6 py-4">Short integer</td>
                    <td className="px-6 py-4">2</td>
                    <td className="px-6 py-4">-32,768 to 32,767</td>
                    <td className="px-6 py-4 font-mono">short temp = -100;</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-mono">long</td>
                    <td className="px-6 py-4">Long integer</td>
                    <td className="px-6 py-4">4 or 8</td>
                    <td className="px-6 py-4">Platform dependent</td>
                    <td className="px-6 py-4 font-mono">long population = 7900000000;</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-mono">float</td>
                    <td className="px-6 py-4">Single-precision floating point</td>
                    <td className="px-6 py-4">4</td>
                    <td className="px-6 py-4">±3.4e±38 (~7 digits)</td>
                    <td className="px-6 py-4 font-mono">float temp = 98.6f;</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-mono">double</td>
                    <td className="px-6 py-4">Double-precision floating point</td>
                    <td className="px-6 py-4">8</td>
                    <td className="px-6 py-4">±1.7e±308 (~15 digits)</td>
                    <td className="px-6 py-4 font-mono">double pi = 3.1415926535;</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-mono">char</td>
                    <td className="px-6 py-4">Single character</td>
                    <td className="px-6 py-4">1</td>
                    <td className="px-6 py-4">-128 to 127 or 0 to 255</td>
                    <td className="px-6 py-4 font-mono">char grade = 'A';</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-mono">bool</td>
                    <td className="px-6 py-4">Boolean value</td>
                    <td className="px-6 py-4">1</td>
                    <td className="px-6 py-4">true or false</td>
                    <td className="px-6 py-4 font-mono">bool isReady = true;</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Type Modifiers</h2>
            <p className="mb-4">
              C++ provides type modifiers to alter the meaning of the basic data types:
            </p>
            <div className="bg-gray-100 p-4 rounded-md">
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-mono">signed</span> - Default, can hold both positive and negative values</li>
                <li><span className="font-mono">unsigned</span> - Can hold only positive values, doubles the positive range</li>
                <li><span className="font-mono">short</span> - Half the default size</li>
                <li><span className="font-mono">long</span> - Twice the default size (or more)</li>
                <li><span className="font-mono">long long</span> - At least 64 bits (C++11)</li>
              </ul>
            </div>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mt-4">
              <code>
{`unsigned int positiveOnly = 40000;
short int smallNumber = 100;
long int bigNumber = 3000000000;
long long int veryBigNumber = 9000000000000000000;
unsigned short int smallPositive = 65000;`}
              </code>
            </pre>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Variable Scope</h2>
            <p className="mb-4">
              Variables in C++ have different scopes depending on where they are declared:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Local Variables</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Declared inside a function or block</li>
                  <li>Only accessible within that function/block</li>
                  <li>Created when the block is entered, destroyed when exited</li>
                  <li>Also called automatic variables</li>
                </ul>
                <pre className="bg-blue-100 p-3 rounded-md overflow-x-auto mt-3">
                  <code>
{`void myFunction() {
  int localVar = 10;  // Local variable
  {
    int innerVar = 5; // Local to this inner block
  }
  // innerVar not accessible here
}`}
                  </code>
                </pre>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Global Variables</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Declared outside all functions</li>
                  <li>Accessible throughout the program</li>
                  <li>Exist for the entire program lifetime</li>
                  <li>Should be used sparingly</li>
                </ul>
                <pre className="bg-green-100 p-3 rounded-md overflow-x-auto mt-3">
                  <code>
{`int globalVar = 20;  // Global variable

void function1() {
  globalVar = 30; // Can modify globalVar
}

void function2() {
  int globalVar = 5; // Local variable shadows global
}`}
                  </code>
                </pre>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Constants</h2>
            <p className="mb-4">
              Constants are variables whose values cannot be changed after initialization:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">const Keyword</h3>
                <p>The traditional way to define constants:</p>
                <pre className="bg-purple-100 p-3 rounded-md overflow-x-auto mt-2">
                  <code>
{`const double PI = 3.14159;
const int MAX_USERS = 100;

// Error: Cannot modify const
// PI = 3.14;`}
                  </code>
                </pre>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">constexpr (C++11)</h3>
                <p>For compile-time constants:</p>
                <pre className="bg-yellow-100 p-3 rounded-md overflow-x-auto mt-2">
                  <code>
{`constexpr int ARRAY_SIZE = 100;
constexpr double GRAVITY = 9.8;

// Can be used where compile-time constants are required
int arr[ARRAY_SIZE];`}
                  </code>
                </pre>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Best Practices</h2>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <ul className="list-disc pl-5 space-y-3">
                <li><strong>Use meaningful names</strong>: <code className="bg-yellow-100 px-1 rounded">studentCount</code> instead of <code className="bg-yellow-100 px-1 rounded">sc</code></li>
                <li><strong>Initialize variables when declaring them</strong> to avoid undefined behavior</li>
                <li><strong>Limit variable scope</strong> as much as possible (prefer local over global)</li>
                <li><strong>Use constants</strong> for values that shouldn't change</li>
                <li><strong>Choose appropriate data types</strong> based on the needed range and precision</li>
                <li><strong>Follow naming conventions</strong> consistently (camelCase, snake_case, etc.)</li>
                <li><strong>Avoid magic numbers</strong> - use named constants instead of literal values</li>
                <li><strong>Be consistent with variable declarations</strong> - one per line is often clearer</li>
                <li><strong>Consider using type aliases</strong> (typedef or using) for complex types</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Common Pitfalls</h2>
            <div className="bg-red-50 p-6 rounded-lg">
              <ul className="list-disc pl-5 space-y-3">
                <li><strong>Uninitialized variables</strong> - May contain garbage values</li>
                <li><strong>Integer overflow</strong> - When a value exceeds its type's capacity</li>
                <li><strong>Floating-point precision errors</strong> - Due to binary representation</li>
                <li><strong>Naming conflicts</strong> - Especially with global variables</li>
                <li><strong>Scope shadowing</strong> - When a local variable hides a global one</li>
                <li><strong>Type mismatches</strong> - Assigning values outside valid range</li>
                <li><strong>Character vs. integer confusion</strong> - chars are actually small integers</li>
              </ul>
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                <pre className="bg-red-100 p-3 rounded-md overflow-x-auto">
                  <code>
{`// Pitfall: Uninitialized variable
int count;
cout << count; // Undefined behavior`}
                  </code>
                </pre>
                <pre className="bg-red-100 p-3 rounded-md overflow-x-auto">
                  <code>
{`// Pitfall: Integer overflow
short small = 32767;
small++; // Overflow - undefined behavior`}
                  </code>
                </pre>
              </div>
            </div>
          </section>
        </main>

       
      </div>
    </div>
  );
}