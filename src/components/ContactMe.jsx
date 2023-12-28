import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_y4nkv7e', 'template_bxjcqki', form.current, 'BbJhHx4FxXJLKyzh_')
            .then((result) => {
                console.log(result.text);
                toast.success('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                toast.error('Failed to send message. Please try again later.');
            });
    };

    return (
        <div
        style={{ fontFamily: 'Marcellus SC, serif' }} 
        className="mx-12 mt-[3rem] md:mt-[5rem] lg:mt-[8rem] flex flex-col justify-center">
            <h1 className="text-white self-center sm:text-[1.4rem] md:text-[2.8rem] lg:text-[4rem]">Contact Me...</h1>

            <div className="flex flex-row mt-[2rem] md:mt-[4rem] gap-x-20 justify-center flex-wrap">
                <form ref={form} onSubmit={sendEmail} className="flex flex-col w-[100%] md:w-[40%] gap-y-4">
                    <input type="text" name="user_name" placeholder="Name" className="h-[1rem] md:h-[2rem] lg:h-[3rem] rounded-lg p-4 text-[0.8rem] md:text-[1.1rem] lg:text-[1.2rem] placeholder:text-black" />
                    <input type="email" name="user_email" placeholder="Email" className="h-[1rem] md:h-[2rem] lg:h-[3rem] rounded-lg p-4 text-[0.8rem] md:text-[1.1rem] lg:text-[1.2rem] placeholder:text-black" />
                    <textarea name="message" placeholder="Message" className="h-[6rem] md:h-[10rem] lg:h-[15rem] rounded-lg p-4 text-[0.8rem] md:text-[1.1rem] lg:text-[1.2rem] placeholder:text-black"/>
                    <input type="submit" value="Send" className="bg-[#7B0000] h-[2rem] md:h-[3rem] lg:h-[4rem] rounded-lg text-white text-[1rem] md:text-[1.3rem] lg:text-[2rem] cursor-pointer"/>
                </form>

                <div className="flex flex-col gap-y-4 justify-center w-[100%] md:w-[40%] h-[15rem] md:h-[15rem] lg:h-[20rem] bg-[#7B0000] mt-[4rem] md:mt-[2rem] lg:mt-[4rem] rounded-xl">
                    <div className="flex flex-row items-center mx-6">
                        <img src="linkedin.png" alt="linkedin" className="w-[2rem] md:w-[2rem] lg:w-[3.5rem]"/>
                        <a href="https://www.linkedin.com/in/swapnil-pant-3919601bb/"><h3 className="text-white ml-[1rem] text-[0.6rem] md:text-[0.6rem] lg:text-[1rem]">https://www.linkedin.com/in/swapnil-pant-3919601bb/</h3></a>
                    </div>

                    <div className="flex flex-row items-center mx-6">
                        <img src="x.png" alt="linkedin" className="w-[2rem] md:w-[2rem] lg:w-[3.5rem]"/>
                        <a href="https://twitter.com/swapn652"><h3 className="text-white ml-[1rem] text-[0.6rem] md:text-[0.6rem] lg:text-[1rem]">https://twitter.com/swapn652</h3></a>
                    </div>

                    <div className="flex flex-row items-center mx-6">
                        <img src="github_black.png" alt="linkedin" className="w-[2rem] md:w-[2rem] lg:w-[3.5rem]"/>
                        <a href="https://github.com/swapn652"><h3 className="text-white ml-[1rem] text-[0.6rem] md:text-[0.6rem] lg:text-[1rem]">https://github.com/swapn652</h3></a>
                    </div>

                    <div className="flex flex-row items-center mx-6">
                        <img src="hashnode.png" alt="linkedin" className="w-[2rem] md:w-[2rem] lg:w-[3.5rem]"/>
                        <a href="https://swapn652.hashnode.dev/"><h3 className="text-white ml-[1rem] text-[0.6rem] md:text-[0.6rem] lg:text-[1rem]">https://swapn652.hashnode.dev/</h3></a>
                    </div>
                </div>
            </div>
            
            <ToastContainer/>
        </div>
    )
}
