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
        <div className={`{${chunkeFont.variable} bg-white shadow-md p-2`}>
            <div className="mt-auto flex content-center place-content-center">
                <Logo/>
            </div>
            <p className={`font-chunke md:text-3xl sm:text-xl whitespace-pre-line text-center`}>{label}</p>
        </div>
    )
}

export default Header;