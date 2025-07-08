
import Link from 'next/link'
import './page.css'

export default function page() {
  return (
   <div>
     
     <h2> C++ Introduction</h2>

<p><strong>C++</strong> is a powerful, high-performance programming language that is widely used for system/software development, game development, drivers, client-server applications, and embedded firmware. It was developed by <strong>Bjarne Stroustrup</strong> at Bell Labs in the early 1980s as an extension of the <strong>C language</strong>, with object-oriented features.</p>

<h3> What is C++?</h3>
<ul>
  <li>C++ is a <strong>general-purpose</strong> programming language.</li>
  <li>It supports both <strong>procedural</strong> and <strong>object-oriented programming</strong> (multi-paradigm).</li>
  <li>It provides <strong>low-level memory manipulation</strong> (like C) but also includes high-level features like <strong>classes, objects, templates</strong>, and <strong>exceptions</strong>.</li>
  <li>C++ is <strong>compiled</strong>, which means programs are converted into machine code before execution.</li>
</ul>

<h3> Key Features of C++</h3>
<ul>
  <li> <strong>Fast & Efficient</strong></li>
  <li><strong>Object-Oriented Programming (OOP)</strong></li>
  <li> <strong>Rich Standard Library (STL)</strong></li>
  <li> <strong>Low-level Access to Memory</strong></li>
  <li> <strong>Platform Independent</strong></li>
  <li> <strong>Extensibility with Other Languages</strong></li>
</ul>

<h3> Uses of C++</h3>
<ul>
  <li>Operating systems (e.g., parts of Windows, Linux)</li>
  <li>Game engines (e.g., Unreal Engine)</li>
  <li>Browsers (e.g., Chrome uses C++)</li>
  <li>Database software (e.g., MySQL)</li>
  <li>Embedded systems</li>
  <li>Financial systems</li>
</ul>

<h3> C++ vs C</h3>
<table border="1" cellpadding="8" cellspacing="0">
  <tr>
    <th>Feature</th>
    <th>C</th>
    <th>C++</th>
  </tr>
  <tr>
    <td>Programming Style</td>
    <td>Procedural</td>
    <td>Procedural + OOP</td>
  </tr>
  <tr>
    <td>Memory Handling</td>
    <td>Manual (pointers)</td>
    <td>Manual + Smart Pointers</td>
  </tr>
  <tr>
    <td>Data Hiding</td>
    <td>Not supported</td>
    <td>Supported via Encapsulation</td>
  </tr>
  <tr>
    <td>Function Overload</td>
    <td>Not supported</td>
    <td>Supported</td>
  </tr>
</table>

<h3> First C++ Program</h3>

<pre><code>
#include &lt;iostream&gt;
using namespace std;


</code></pre>

<p><strong>Output:</strong></p>
<pre><code>Hello, World!</code></pre>

<h3> Summary</h3>
<p>C++ is a fast, efficient, and versatile language that bridges the gap between low-level hardware access and high-level object-oriented design. It’s ideal for performance-critical applications and gives developers fine-grained control over system resources.</p>

   </div>
  )
}
