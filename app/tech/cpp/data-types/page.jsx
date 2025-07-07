// pages/cpp/data-types.js
import Head from 'next/head';

export default function CppDataTypes() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Head>
        <title>C++ Data Types - Programming Reference</title>
        <meta name="description" content="Complete reference for C++ data types with examples" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">C++ Data Types</h1>
          <p className="mt-4 text-xl text-gray-600">
            Fundamental building blocks for variables in C++
          </p>
        </header>

        <main className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Primitive Data Types</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size (bytes)</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Range</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Example</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-mono">int</td>
                    <td className="px-6 py-4">4</td>
                    <td className="px-6 py-4">-2,147,483,648 to 2,147,483,647</td>
                    <td className="px-6 py-4 font-mono">int age = 25;</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-mono">float</td>
                    <td className="px-6 py-4">4</td>
                    <td className="px-6 py-4">±3.4e±38 (~7 digits)</td>
                    <td className="px-6 py-4 font-mono">float pi = 3.14f;</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-mono">double</td>
                    <td className="px-6 py-4">8</td>
                    <td className="px-6 py-4">±1.7e±308 (~15 digits)</td>
                    <td className="px-6 py-4 font-mono">double precise = 3.1415926535;</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-mono">char</td>
                    <td className="px-6 py-4">1</td>
                    <td className="px-6 py-4">-128 to 127 or 0 to 255</td>
                    <td className="px-6 py-4 font-mono">char grade = 'A';</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-mono">bool</td>
                    <td className="px-6 py-4">1</td>
                    <td className="px-6 py-4">true or false</td>
                    <td className="px-6 py-4 font-mono">bool isValid = true;</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-mono">void</td>
                    <td className="px-6 py-4">N/A</td>
                    <td className="px-6 py-4">N/A</td>
                    <td className="px-6 py-4 font-mono">void printMessage();</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Type Modifiers</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Size Modifiers</h3>
                <pre className="bg-blue-100 p-3 rounded-md overflow-x-auto">
                  <code>
{`short int smallNum;     // At least 2 bytes
long int bigNum;        // At least 4 bytes
long long int hugeNum;  // At least 8 bytes`}
                  </code>
                </pre>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Sign Modifiers</h3>
                <pre className="bg-green-100 p-3 rounded-md overflow-x-auto">
                  <code>
{`signed int normal;     // Can be positive/negative (default)
unsigned int positive;  // Only positive values`}
                  </code>
                </pre>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Derived Data Types</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">Arrays</h3>
                <pre className="bg-purple-100 p-3 rounded-md overflow-x-auto">
                  <code>
{`int numbers[5];          // Declaration
float temps[] = {36.5, 37.0};  // Initialization`}
                  </code>
                </pre>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Pointers</h3>
                <pre className="bg-yellow-100 p-3 rounded-md overflow-x-auto">
                  <code>
{`int num = 10;
int* ptr = &num;  // Pointer to num`}
                  </code>
                </pre>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-2">References</h3>
                <pre className="bg-red-100 p-3 rounded-md overflow-x-auto">
                  <code>
{`int original = 5;
int& ref = original;  // Reference to original`}
                  </code>
                </pre>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">User-Defined Types</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-indigo-800 mb-2">Structures</h3>
                <pre className="bg-indigo-100 p-3 rounded-md overflow-x-auto">
                  <code>
{`struct Person {
  string name;
  int age;
  float height;
};

Person p1;
p1.name = "Alice";`}
                  </code>
                </pre>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-pink-800 mb-2">Classes</h3>
                <pre className="bg-pink-100 p-3 rounded-md overflow-x-auto">
                  <code>
{`class Rectangle {
  private:
    int width, height;
  public:
    void setDimensions(int w, int h) {
      width = w;
      height = h;
    }
};`}
                  </code>
                </pre>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Type Conversion</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Implicit Conversion</h3>
                <pre className="bg-gray-200 p-3 rounded-md overflow-x-auto">
                  <code>
{`int num = 10;
double d = num;  // Automatically converted`}
                  </code>
                </pre>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Explicit Conversion</h3>
                <pre className="bg-blue-100 p-3 rounded-md overflow-x-auto">
                  <code>
{`double pi = 3.14159;
int approx = (int)pi;  // C-style cast
int precise = static_cast<int>(pi);  // C++ cast`}
                  </code>
                </pre>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Type Aliases</h2>
            <div className="bg-green-50 p-4 rounded-lg">
              <pre className="bg-green-100 p-3 rounded-md overflow-x-auto">
                <code>
{`typedef unsigned long ulong;  // Traditional
using Celsius = float;        // Modern (C++11)

ulong bigNumber;
Celsius currentTemp = 23.5;`}
                </code>
              </pre>
            </div>
          </section>
        </main>

        
      </div>
    </div>
  );
}