import React from 'react'
import { ProjectCard } from './ProjectCard'

export const Projects = () => {
  return (
    <div
        style={{ fontFamily: 'Marcellus SC, serif' }} 
        className="mx-12 mt-[3rem] md:mt-[5rem] lg:mt-[8rem] flex flex-col items-center justify-center">
        <h1 className="text-white sm:text-[1.3rem] md:text-[2.7rem] lg:text-[4rem]">
            Some projects I have worked on...
        </h1>

        <div className="flex flex-row mt-[2rem] md:mt-[4rem] w-screen flex-wrap gap-x-12 gap-y-12 justify-center">
            <ProjectCard title = "AttendX" link = "https://attend-x-client.vercel.app/" githubLink="https://github.com/swapn652/AttendX" />
            <ProjectCard title = "Showwboard" link = "https://showwboard.vercel.app/" githubLink="https://github.com/swapn652/Showwboard" />
            <ProjectCard title = "Beatles Fan Site" link = "https://beatles-fan-site.vercel.app/" githubLink = "https://github.com/swapn652/Beatles_FanSite" />
            <ProjectCard title = "Showwpost" link = "https://github.com/swapn652/Showwpost" githubLink="https://github.com/swapn652/Showwpost" />
        </div>
    </div>
  )
}
