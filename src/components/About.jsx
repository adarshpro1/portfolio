import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full sm:h-screen bg-gradient-to-b from-yellow-200 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-white'>
                    About
                </p>
            </div>
            <p className='text-xl mt-20'>
            Hello and welcome to my portfolio! My name is Adarsh, and I'm 25 years old, based in Bangalore. I'm an enthusiastic Java Full-stack developer with a strong passion for coding. I believe in the power of listening, leaning new things and try to undertand my mistakes and strive to achieve success in life.
            </p>
            <br/>
            <p className='text-2xl font-bold  border-gray-500'>
            Background and Education
                </p>
            <p className='text-xl'>
            I hold a BSc in Physics, Mathematics, Computer Science (PMC triple main) from Mysore University, Institution: St. Philomena's College, Mysore. My academic journey has equipped me with a solid foundation in Java. I've always been fascinated by coding, and my studies have allowed me to dive deep into Core java and Advance java.
            </p>
            <br/>   
        </div>
    </div>
  )
}

export default About