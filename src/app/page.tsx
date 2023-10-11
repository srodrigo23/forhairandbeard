'use client'
import Image from 'next/image'

import localFont from 'next/font/local'
 
// Font files can be colocated inside of `pages`
import { Inter } from 'next/font/google'
import { useState } from 'react'
import Header from './components/header'
import Logo from './components/logo'

 
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const chunkeFont = localFont({ 
  src: './assets/chunkfive_ex.ttf',
  variable:'--font-chunkfive'
})


export default function Home() {
  
  const [isDark, setIsDark] = useState(false)

  const clicking = () =>{
    setIsDark(!isDark)
  }
  const label = "FOR \n HAIR & BEARD"
  return (
    <body className={`flex flex-col min-h-screen ${isDark? "bg-black": "bg-white"}`}>

      <Header></Header>
      <div 
        className={`${chunkeFont.variable} flex flex-col place-content-center h-full items-center content-center`}
        onClick={clicking}
        >
        <Logo fill={`${isDark? "white": "black"}`}></Logo>
        {/* <Image
          src="/forhairandbeard.svg"
          alt="ForHairAndBear"
          className={`dark:invert pb-10 ${isDark? "bg-black": "bg-white"}`}
          width={300}
          height={24}
          priority
        /> */}
        <div className={`font-chunke md:text-5xl sm:text-4xl whitespace-pre-line text-center ${isDark? "text-white": ""}`}>{label}</div>          
      </div>
      <footer className="mt-auto flex content-center place-content-center pt-15 pb-5">
        <div className={`md:text-2xl sm:text-sm ${isDark? "text-white": ""}`}>Cochabamba - 2023</div>
      </footer>
    </body>
  )
}


