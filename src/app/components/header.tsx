'use client'

import Logo from "./logo";
import localFont from 'next/font/local'

const chunkeFont = localFont({ 
    src: '../assets/chunkfive_ex.ttf',
    variable:'--font-chunkfive'
})
  
const Header = () =>{

    const label = "FOR HAIR & BEARD"

    return (
        <div className={`{${chunkeFont.variable} bg-white shadow-md flex p-4`}>
            <Logo/>
            <p className={`font-chunke md:text-5xl sm:text-4xl whitespace-pre-line text-center`}>{label}</p>
        </div>
    )
}

export default Header;