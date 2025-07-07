
'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from 'next/navigation';

import './home.css'

export default function Home() {
  const router = useRouter();

  return (
    <div className="home">
    
   <div className="left"> <h1> Kickstart your career</h1>
   <h1>  Get certified by completing a course</h1></div>
   <div className="right">
    <button onClick={()=>{router.push("/courses")}}> go to </button>
   </div>
    </div>
  );
}
