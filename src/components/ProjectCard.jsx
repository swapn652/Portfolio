import React from 'react'

export const ProjectCard = ({ title, link, githubLink }) => {
    return (
        <div
            style={{ fontFamily: 'Marcellus SC, serif' }}
            className="flex flex-col items-center sm:w-[80%] md:w-[35%] lg:w-[40%] sm:h-[17rem] md:h-[18rem] lg:h-[26rem] rounded-2xl bg-white">
            <h1 className="sm:text-[1.5rem] md:text-[2rem] lg:text-[5rem]">
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

            <div className="flex flex-row items-center sm:mt-[0.3rem] md:mt-[0.15rem] lg:mt-[0.6rem]">
                <img src="./github_black.png" className="sm:w-[1rem] sm:h-[1rem] md:w-[1.5rem] md:h-[1.5rem] lg:w-[4rem] lg:h-[4rem] mt-1 align-middle" alt="GitHub Icon" />
                <a href={githubLink} target="_blank" className="sm:text-[0.8rem] md:text-[0.7rem] lg:text-[1.3rem] ml-2 underline">
                    {githubLink}
                </a>
            </div>

        </div>
    )
}
