import React from 'react'

export const ProjectCard = ({ title, link, githubLink}) => {
    return (
        <div
            style={{ fontFamily: 'Marcellus SC, serif' }}
            className="flex flex-col items-center w-[40%] h-[26rem] rounded-2xl bg-white">
            <h1 className="text-[5rem]">
                {title}
            </h1>

            <div className="w-[100%] h-[0.1em] bg-black"></div>
            
            <iframe
                src={link}
                width="100%"
                height="200rem"
                title={title}
            ></iframe>

            <div className="w-[100%] h-[0.1em] bg-black"></div>

            <div className="flex flex-row items-center">
                <img src="./github_black.png" className="w-[4rem] mt-[1rem]"/>
                <a href={githubLink} target="_blank" className="text-[1.4rem] ml-[0.6rem] underline">
                    {githubLink}
                </a>
            </div>
        </div>
    )
}
