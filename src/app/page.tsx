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
  const images = []
  for(let i=1; i<=14; i++){ 
    if(i<10){
      images.push(`00${i}.jpg`) 
    }else{
      images.push(`0${i}.jpg`) 
    }    
  }
  console.log(images);
  return (
    <body 
      className={`flex flex-col min-h-screen ${isDark? "bg-black": "bg-white"}`}
      >
      <div 
        className={`${chunkeFont.variable} flex flex-col place-content-center h-full items-center content-center`}
        onClick={clicking}>
        <div>
          {/* <LogoComponent fill={`${isDark? "white": "black"}`}></LogoComponent> */}
          <div 
            className={`font-chunke md:text-5xl sm:text-4xl whitespace-pre-line text-center ${isDark? "text-white": ""}`}>
            {label}
          </div>
        </div>
      </div>
      <div className='mt-auto flex content-center place-content-center pt-15 pb-5'>
        <ol>
          {
            images.map((el,key) => (
              <li key={`i-${key}`}>
                <div
                  className='p-3'>
                  {<Image 
                    src={`/img/${el}`}
                    alt={`ilustration-${el}`}
                    // className=''
                    width={200}
                    height={100}
                    priority
                  />}
                </div>
              </li>
            ))
          }
        </ol>
      </div>
      <footer className="mt-auto flex content-center place-content-center pt-15 pb-5">
        <div className={`md:text-2xl sm:text-sm ${isDark? "text-white": ""}`}>Cochabamba - 2023</div>
      </footer>
    </body>
  )
}


