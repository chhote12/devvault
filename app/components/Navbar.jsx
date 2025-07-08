import Link from 'next/link'
import '../home.css'
export default function Navbar() {
  return (
    <div className='name'>
         <ul className='ulnav'>
      {/* General */}
      <li><Link href="/">Home</Link></li>

      {/* Programming Languages */}
      <li><Link href="/cpp">C++</Link></li>
      <li><Link href="/c">C</Link></li>
      <li><Link href="/python">Python</Link></li>
      <li><Link href="/java">Java</Link></li>
      <li><Link href="/javascript">JavaScript</Link></li>
      <li><Link href="/typescript">TypeScript</Link></li>
      <li><Link href="/go">Go</Link></li>
      <li><Link href="/rust">Rust</Link></li>
      <li><Link href="/ruby">Ruby</Link></li>
      <li><Link href="/kotlin">Kotlin</Link></li>
      <li><Link href="/swift">Swift</Link></li>

      {/* Web Technologies */}
      <li><Link href="/html">HTML</Link></li>
      <li><Link href="/css">CSS</Link></li>
      <li><Link href="/sass">SASS / SCSS</Link></li>
      <li><Link href="/bootstrap">Bootstrap</Link></li>
      <li><Link href="/tailwind">Tailwind CSS</Link></li>

      {/* Frontend Frameworks */}
      <li><Link href="/react">React</Link></li>
      <li><Link href="/angular">Angular</Link></li>
      <li><Link href="/vue">Vue.js</Link></li>
      <li><Link href="/nextjs">Next.js</Link></li>
      <li><Link href="/svelte">Svelte</Link></li>

      {/* Backend Frameworks */}
      <li><Link href="/nodejs">Node.js</Link></li>
      <li><Link href="/express">Express.js</Link></li>
      <li><Link href="/django">Django</Link></li>
      <li><Link href="/flask">Flask</Link></li>
      <li><Link href="/springboot">Spring Boot</Link></li>
      <li><Link href="/aspnet">ASP.NET</Link></li>

      {/* Databases */}
      <li><Link href="/mysql">MySQL</Link></li>
      <li><Link href="/postgresql">PostgreSQL</Link></li>
      <li><Link href="/mongodb">MongoDB</Link></li>
      <li><Link href="/sqlite">SQLite</Link></li>
      <li><Link href="/firebase">Firebase</Link></li>
      <li><Link href="/redis">Redis</Link></li>

      {/* DevOps & Tools */}
      <li><Link href="/git">Git</Link></li>
      <li><Link href="/github">GitHub</Link></li>
      <li><Link href="/docker">Docker</Link></li>
      <li><Link href="/kubernetes">Kubernetes</Link></li>
      <li><Link href="/linux">Linux</Link></li>
      <li><Link href="/vscode">VS Code</Link></li>
      <li><Link href="/jenkins">Jenkins</Link></li>
      <li><Link href="/nginx">Nginx</Link></li>

      {/* AI / ML / Data Science */}
      <li><Link href="/machine-learning">Machine Learning</Link></li>
      <li><Link href="/deep-learning">Deep Learning</Link></li>
      <li><Link href="/ai">Artificial Intelligence</Link></li>
      <li><Link href="/data-science">Data Science</Link></li>
      <li><Link href="/pandas">Pandas</Link></li>
      <li><Link href="/numpy">NumPy</Link></li>
      <li><Link href="/sklearn">Scikit-learn</Link></li>
      <li><Link href="/tensorflow">TensorFlow</Link></li>
      <li><Link href="/pytorch">PyTorch</Link></li>
      <li><Link href="/keras">Keras</Link></li>

      {/* Mobile Development */}
      <li><Link href="/flutter">Flutter</Link></li>
      <li><Link href="/react-native">React Native</Link></li>
      <li><Link href="/android">Android</Link></li>
      <li><Link href="/ios">iOS</Link></li>

      {/* Cybersecurity */}
      <li><Link href="/cybersecurity">Cybersecurity</Link></li>
      <li><Link href="/ethical-hacking">Ethical Hacking</Link></li>
      <li><Link href="/kali-linux">Kali Linux</Link></li>
      <li><Link href="/burp-suite">Burp Suite</Link></li>
      <li><Link href="/wireshark">Wireshark</Link></li>

      {/* Cloud & Hosting */}
      <li><Link href="/aws">AWS</Link></li>
      <li><Link href="/azure">Azure</Link></li>
      <li><Link href="/gcp">Google Cloud</Link></li>
      <li><Link href="/vercel">Vercel</Link></li>
      <li><Link href="/netlify">Netlify</Link></li>
    </ul>
    </div>
  )
}