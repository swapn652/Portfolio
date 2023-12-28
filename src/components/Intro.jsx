import React from 'react';
import { Typewriter } from "react-simple-typewriter";

export const Intro = () => {
    return (
        <div className="sm:mx-6 md:mx-16 mt-[4rem] text-white flex flex-row justify-center">
            <div className="flex flex-col w-[100%]">
                <div
                    className="text-white md:text-[2rem] lg:text-[4rem] w-[100%]"
                    style={{ fontFamily: 'Marcellus SC, serif' }}
                >
                    Hello
                </div>
                <div
                    className="text-white md:text-[2rem] lg:text-[4rem] w-[100%]"
                    style={{ fontFamily: 'Marcellus SC, serif' }}
                >
                    I'm Swapnil Pant
                </div>
                <div
                    className="text-white md:text-[2rem] lg:text-[4rem] w-[100%]"
                    style={{ fontFamily: 'Marcellus SC, serif' }}
                >
                    <Typewriter words = {["A Full Stack Developer", "A Software Engineer"]} />
                </div>
            </div>

            <img src="./swapnil_pant.png" className="sm:w-[7rem] md:w-[14rem] lg:w-[22rem]"/>
        </div>
    )
}
