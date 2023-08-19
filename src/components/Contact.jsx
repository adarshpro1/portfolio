import React from 'react'

const Contact = () => {
  return (
    <div name="Contact" className='bg-gradient-to-b from-black to-gray-800 w-full 3xl:h-screen text-white'>
    <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full'>
            <div className='pd-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                  Contact
                </p>
                <p className='py-6'> The form below is to get in touch with me</p>
            </div>

            <div className='flex justify-center items-center'> 
              <form action='https://getform.io/f/9a9cb58d-595b-4950-a4d2-35dd28d6b58e' method='POST' className='flex flex-col w-full md:w-1/2'>
                 <input type='text' name='name' placeholder='Enter your Name' 
                 className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'>    
                  </input>
                 <input type='text' name='email' placeholder='Enter your Email' 
                 className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'>   
                 </input>
                 <textarea name="message"  placeholder='Enter your Message' rows="10" 
                 className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'>
                 </textarea>
              <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                Lets talk
              </button>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Contact