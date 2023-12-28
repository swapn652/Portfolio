import React from 'react';
import AnimatedText from 'react-animated-text-content';

export const Intro = () => {
    return (
        <div className="sm:mx-6 md:mx-12 mt-[4rem] flex flex-row justify-center">
            <div className="flex flex-col w-[100%]">
                <AnimatedText
                    type="words" // animate words or chars
                    animation={{
                        x: '200px',
                        y: '-20px',
                        scale: 1.1,
                        ease: 'ease-in-out',
                    }}
                    animationType="float"
                    interval={0.06}
                    duration={0.8}
                    tag="p"
                    className="animated-paragraph text-white md:text-[2rem] lg:text-[4rem] w-[100%]"
                    style={{ fontFamily: 'Marcellus SC, serif' }}
                    includeWhiteSpaces
                    threshold={0.1}
                    rootMargin="20%"
                >
                    Hello
                </AnimatedText>;
                <AnimatedText
                    type="words" // animate words or chars
                    animation={{
                        x: '200px',
                        y: '-20px',
                        scale: 1.1,
                        ease: 'ease-in-out',
                    }}
                    animationType="float"
                    interval={0.06}
                    duration={1.8}
                    tag="p"
                    className="animated-paragraph text-white md:text-[2rem] lg:text-[4rem] w-[100%]"
                    style={{ fontFamily: 'Marcellus SC, serif' }}
                    includeWhiteSpaces
                    threshold={0.1}
                    rootMargin="20%"
                >
                    I'm Swapnil Pant
                </AnimatedText>;
                <AnimatedText
                    type="words" // animate words or chars
                    animation={{
                        x: '200px',
                        y: '-20px',
                        scale: 1.1,
                        ease: 'ease-in-out',
                    }}
                    animationType="float"
                    interval={0.06}
                    duration={2.8}
                    tag="p"
                    className="animated-paragraph text-white md:text-[2rem] lg:text-[4rem] w-[100%]"
                    style={{ fontFamily: 'Marcellus SC, serif' }}
                    includeWhiteSpaces
                    threshold={0.1}
                    rootMargin="20%"
                >
                A Full Stack Developer
                </AnimatedText>
            </div>

            <img src="./swapnil_anim.jpeg" className="sm:w-[7rem] md:w-[20rem] lg:w-[25rem]"/>
        </div>
    )
}
