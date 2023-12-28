import React from 'react'

export const Experience = () => {
    return (
        <div
            style={{ fontFamily: 'Marcellus SC, serif' }}
            className="mx-12 mt-[3rem] md:mt-[8rem] flex flex-col items-center justify-center">
            <h1 className="text-white sm:text-[1.4rem] md:text-[2.8rem] lg:text-[4rem]">
                My Professional Journey...
            </h1>

            <div className="w-[90%] rounded-2xl bg-[#7B0000] mt-[2rem] md:mt-[4rem] mb-[2rem] flex flex-col">
                <div className="flex flex-col mt-[2rem]">
                    <div className="flex flex-row flex-wrap justify-between mx-4 md:mx-12 items-center">
                        <h1 className="text-white sm:text-[1.2rem] md:text-[1.8rem] lg:text-[4rem]">React Developer</h1>
                        <h1 className="text-white sm:text-[1rem] md:text-[1.3rem] lg:text-[3rem]">Sep - Nov 2023</h1>
                    </div>

                    <div className="flex flex-row flex-wrap justify-between mx-4 md:mx-12 items-center">
                        <h1 className="text-white sm:text-[1.2rem] md:text-[1.8rem] lg:text-[4rem]">Wereon</h1>
                        <h1 className="text-white hidden md:block md:text-[1.3rem] lg:text-[3rem] md:mr-[4.5rem] lg:mr-[10.5rem]">Remote</h1>
                    </div>
                </div>

                <div
                    style={{ fontFamily: 'Marcellus, serif' }}
                    className="text-white mt-[1rem] sm:text-[0.6rem] md:text-[1rem] lg:text-[2rem] mx-4 md:mx-12 sm:mb-[2rem] md:mb-[3rem] lg:mb-[4rem]">
                    • Developed a responsive B2B SaaS web application for a medical services platform using React.js, Tailwind CSS, and Material UI. <br />
                    • Created a dynamic home page with a location and symptom-based search bar, which directed users to specific tabs. <br />
                    • Implemented filter menus, sorting options, and price range sliders for user-friendly data access. <br />
                    • Employed React hooks (useState, useEffect, useContext) to manage state and ensure a smooth user experience. <br />
                    • Developed context variables for seamless transitions between search results and the home page. <br />
                    • Built additional pages for Privacy, Terms and Conditions, FAQs, Symptoms, Specialities, and Diseases. <br />
                    • Introduced routing for seamless navigation. <br />
                    • <u>TECH STACK</u>: React.js, Tailwind CSS, MaterialUI <br />
                    • <u>SKILLS ACQUIRED</u>: Proficiency in React.js, expertise in using React hooks, project management, effective communication, and teamwork. <br />
                </div>
            </div>

            <div className="w-[90%] rounded-2xl bg-[#7B0000] mt-[2rem] mb-[2rem] flex flex-col">
                <div className="flex flex-col mt-[2rem]">
                    <div className="flex flex-row flex-wrap justify-between mx-4 md:mx-12 items-center">
                        <h1 className="text-white sm:text-[1.2rem] md:text-[1.8rem] lg:text-[4rem]">Technical Blogger</h1>
                        <h1 className="text-white sm:text-[1rem] md:text-[1.3rem] lg:text-[3rem]">Mar 2023 - Present</h1>
                    </div>

                    <div className="flex flex-row flex-wrap justify-between mx-4 md:mx-12 items-center">
                        <h1 className="text-white sm:text-[1.2rem] md:text-[1.8rem] lg:text-[4rem]">Self Employeed</h1>
                        <h1 className="text-white hidden md:block md:text-[1.3rem] lg:text-[3rem] md:mr-[4.5rem] lg:mr-[10.5rem]">Remote</h1>
                    </div>
                </div>

                <div
                    style={{ fontFamily: 'Marcellus, serif' }}
                    className="text-white mt-[1rem] sm:text-[0.6rem] md:text-[1rem] lg:text-[2rem] mx-4 md:mx-12 sm:mb-[2rem] md:mb-[3rem] lg:mb-[4rem]">
                    • Authored 10 technical articles on programming topics, generating 4000+ views and 120 followers. <br/>
                    • <u>Topics</u>: JavaScript (2), TypeScript (1), React (3), Express.js, REST APIs (1), personal projects. <br/>
                    • <u>View Blogs</u>: <a className="cursor-pointer underline" href="https://swapn652.hashnode.dev/">https://swapn652.hashnode.dev/</a><br/>
                </div>
            </div>
        </div>
    )
}
