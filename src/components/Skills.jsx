import React from 'react'

export const Skills = () => {
  return (
    <div
        style={{ fontFamily: 'Marcellus SC, serif' }} 
        className="mx-12 mt-[5rem] flex flex-col items-center justify-center">
        <h1 className="text-white text-[4rem]">I have worked with...</h1>
        <div className="flex flex-row mt-[2rem] w-screen flex-wrap gap-x-12 gap-y-12 justify-center">
            <img src = "./java.png" alt="Java" className="w-[12rem]"/>
            <img src = "./html-5.png" alt="Java" className="w-[12rem]"/>
            <img src = "./css-3.png" alt="Java" className="w-[12rem]"/>
            <img src = "./js.png" alt="Java" className="w-[12rem]"/>
            <img src = "./ts.png" alt="Java" className="w-[12rem]"/>
            <img src = "./nodejs.png" alt="Java" className="w-[12rem]"/>
            <img src = "./react.png" alt="Java" className="w-[12rem]"/>
            <img src = "./express.png" alt="Java" className="w-[12rem]"/>
            <img src = "./tailwind.png" alt="Java" className="w-[12rem]"/>
            <img src = "./git.png" alt="Java" className="w-[12rem]"/>
            <img src = "./github.png" alt="Java" className="w-[12rem]"/>
            <img src = "./SQL.png" alt="Java" className="w-[12rem]"/>
            <img src = "./mongodb.png" alt="Java" className="w-[12rem]"/>
            <img src = "./graphql.png" alt="Java" className="w-[12rem]"/>
        </div>
    </div>
  )
}
