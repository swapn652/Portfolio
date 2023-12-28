import React from 'react';

export const Intro = () => {
    return (
        <div className="sm:mx-6 md:mx-12 mt-[4rem] flex flex-row justify-center">
            <div className="flex flex-col w-[100%]">
                <div
                    className="text-white md:text-[2rem] lg:text-[4rem] w-[100%]"
                    style={{ fontFamily: 'Marcellus SC, serif' }}
                >
                    Hello
                </div>;
                <div
                    className="text-white md:text-[2rem] lg:text-[4rem] w-[100%]"
                    style={{ fontFamily: 'Marcellus SC, serif' }}
                >
                    I'm Swapnil Pant
                </div>;
                <div
                    className="text-white md:text-[2rem] lg:text-[4rem] w-[100%]"
                    style={{ fontFamily: 'Marcellus SC, serif' }}
                >
                A Full Stack Developer
                </div>
            </div>

            <img src="./swapnil_anim.jpeg" className="sm:w-[7rem] md:w-[20rem] lg:w-[25rem]"/>
        </div>
    )
}
