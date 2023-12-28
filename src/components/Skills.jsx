import React from 'react'

export const Skills = () => {
  return (
    <div
        style={{ fontFamily: 'Marcellus SC, serif' }} 
        className="mx-12 mt-[3rem] md:mt-[5rem] lg:mt-[8rem] flex flex-col items-center justify-center">
        <h1 className="text-white sm:text-[1.4rem] md:text-[2.8rem] lg:text-[4rem]">I have worked with...</h1>
        <div className="flex flex-row mt-[2rem] md:mt-[4rem] w-screen flex-wrap gap-x-12 gap-y-12 justify-center">
            <img src = "./java.png" alt="Java" className="sm:w-[6rem] md:w-[8rem] lg:w-[12rem]"/>
            <img src = "./html-5.png" alt="Java" className="sm:w-[6rem] md:w-[8rem] lg:w-[12rem]"/>
            <img src = "./css-3.png" alt="Java" className="sm:w-[6rem] md:w-[8rem] lg:w-[12rem]"/>
            <img src = "./js.png" alt="Java" className="sm:w-[6rem] md:w-[8rem] lg:w-[12rem]"/>
            <img src = "./ts.png" alt="Java" className="sm:w-[6rem] md:w-[8rem] lg:w-[12rem]"/>
            <img src = "./nodejs.png" alt="Java" className="sm:w-[6rem] md:w-[8rem] lg:w-[12rem]"/>
            <img src = "./react.png" alt="Java" className="sm:w-[6rem] md:w-[8rem] lg:w-[12rem]"/>
            <img src = "./express.png" alt="Java" className="sm:w-[6rem] md:w-[8rem] lg:w-[12rem]"/>
            <img src = "./tailwind.png" alt="Java" className="sm:w-[6rem] md:w-[8rem] lg:w-[12rem]"/>
            <img src = "./git.png" alt="Java" className="sm:w-[6rem] md:w-[8rem] lg:w-[12rem]"/>
            <img src = "./github.png" alt="Java" className="sm:w-[6rem] md:w-[8rem] lg:w-[12rem]"/>
            <img src = "./SQL.png" alt="Java" className="sm:w-[6rem] md:w-[8rem] lg:w-[12rem]"/>
            <img src = "./mongodb.png" alt="Java" className="sm:w-[6rem] md:w-[8rem] lg:w-[12rem]"/>
            <img src = "./graphql.png" alt="Java" className="sm:w-[6rem] md:w-[8rem] lg:w-[12rem]"/>
        </div>
    </div>
  )
}
