import Link from 'next/link'
import '../home.css'
export default function Navbar() {
  return (
    <div className='name'>
         <ul className='ulnav'>
      {/* General */}
      <li><Link href="/">Home</Link></li>

      {/* Programming Languages */}
      <li><Link href="/tech/cpp">C++</Link></li>
      <li><Link href="/tech/c">C</Link></li>
      <li><Link href="/tech/python">Python</Link></li>
      <li><Link href="/tech/java">Java</Link></li>
      <li><Link href="/tech/javascript">JavaScript</Link></li>
      <li><Link href="/tech/typescript">TypeScript</Link></li>
      <li><Link href="/tech/go">Go</Link></li>
      <li><Link href="/tech/rust">Rust</Link></li>
      <li><Link href="/tech/ruby">Ruby</Link></li>
      <li><Link href="/tech/kotlin">Kotlin</Link></li>
      <li><Link href="/tech/swift">Swift</Link></li>

      {/* Web Technologies */}
      <li><Link href="/tech/html">HTML</Link></li>
      <li><Link href="/tech/css">CSS</Link></li>
      <li><Link href="/tech/sass">SASS / SCSS</Link></li>
      <li><Link href="/tech/bootstrap">Bootstrap</Link></li>
      <li><Link href="/tech/tailwind">Tailwind CSS</Link></li>

      {/* Frontend Frameworks */}
      <li><Link href="/tech/react">React</Link></li>
      <li><Link href="/tech/angular">Angular</Link></li>
      <li><Link href="/tech/vue">Vue.js</Link></li>
      <li><Link href="/tech/nextjs">Next.js</Link></li>
      <li><Link href="/tech/svelte">Svelte</Link></li>

      {/* Backend Frameworks */}
      <li><Link href="/tech/nodejs">Node.js</Link></li>
      <li><Link href="/tech/express">Express.js</Link></li>
      <li><Link href="/tech/django">Django</Link></li>
      <li><Link href="/tech/flask">Flask</Link></li>
      <li><Link href="/tech/springboot">Spring Boot</Link></li>
      <li><Link href="/tech/aspnet">ASP.NET</Link></li>

      {/* Databases */}
      <li><Link href="/tech/mysql">MySQL</Link></li>
      <li><Link href="/tech/postgresql">PostgreSQL</Link></li>
      <li><Link href="/tech/mongodb">MongoDB</Link></li>
      <li><Link href="/tech/sqlite">SQLite</Link></li>
      <li><Link href="/tech/firebase">Firebase</Link></li>
      <li><Link href="/tech/redis">Redis</Link></li>

      {/* DevOps & Tools */}
      <li><Link href="/tech/git">Git</Link></li>
      <li><Link href="/tech/github">GitHub</Link></li>
      <li><Link href="/tech/docker">Docker</Link></li>
      <li><Link href="/tech/kubernetes">Kubernetes</Link></li>
      <li><Link href="/tech/linux">Linux</Link></li>
      <li><Link href="/tech/vscode">VS Code</Link></li>
      <li><Link href="/tech/jenkins">Jenkins</Link></li>
      <li><Link href="/tech/nginx">Nginx</Link></li>

      {/* AI / ML / Data Science */}
      <li><Link href="/tech/machine-learning">Machine Learning</Link></li>
      <li><Link href="/tech/deep-learning">Deep Learning</Link></li>
      <li><Link href="/tech/ai">Artificial Intelligence</Link></li>
      <li><Link href="/tech/data-science">Data Science</Link></li>
      <li><Link href="/tech/pandas">Pandas</Link></li>
      <li><Link href="/tech/numpy">NumPy</Link></li>
      <li><Link href="/tech/sklearn">Scikit-learn</Link></li>
      <li><Link href="/tech/tensorflow">TensorFlow</Link></li>
      <li><Link href="/tech/pytorch">PyTorch</Link></li>
      <li><Link href="/tech/keras">Keras</Link></li>

      {/* Mobile Development */}
      <li><Link href="/tech/flutter">Flutter</Link></li>
      <li><Link href="/tech/react-native">React Native</Link></li>
      <li><Link href="/tech/android">Android</Link></li>
      <li><Link href="/tech/ios">iOS</Link></li>

      {/* Cybersecurity */}
      <li><Link href="/tech/cybersecurity">Cybersecurity</Link></li>
      <li><Link href="/tech/ethical-hacking">Ethical Hacking</Link></li>
      <li><Link href="/tech/kali-linux">Kali Linux</Link></li>
      <li><Link href="/tech/burp-suite">Burp Suite</Link></li>
      <li><Link href="/tech/wireshark">Wireshark</Link></li>

      {/* Cloud & Hosting */}
      <li><Link href="/tech/aws">AWS</Link></li>
      <li><Link href="/tech/azure">Azure</Link></li>
      <li><Link href="/tech/gcp">Google Cloud</Link></li>
      <li><Link href="/tech/vercel">Vercel</Link></li>
      <li><Link href="/tech/netlify">Netlify</Link></li>
    </ul>
    </div>
  )
}
