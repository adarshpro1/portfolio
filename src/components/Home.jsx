import React from 'react';
import adarsh from '../assets/adarsh.jpg';
import { MdKeyboardArrowRight} from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" 
    className="h-screen w-full bg-gradient-to-b from-black via-black to-yellow-200"> 
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    i'am Full stack Developer
                </h2>
                <p className='text-white py-4 max-w-md'>
                Highly motivated and dedicated individual with a strong inner drive to continuously learn, grow, and acquire new skills. Eager to collaborate within a team environment, leveraging my passion for personal and professional development to contribute effectively to achieving organizational goals. Committed to delivering excellence through unwavering dedication and a strong work ethic.
                </p>
                <div>
                    <Link to='portfolio' smooth duration={500} className="group text-white  w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                    Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                        <MdKeyboardArrowRight size={25}/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={adarsh} alt="my profile" className='rounded-2xl mx-auto w-3/3 md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Home