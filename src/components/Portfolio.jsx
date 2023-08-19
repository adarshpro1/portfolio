import React from 'react'
import contact from "../assets/portfolio/contact.jpg";
import crm from "../assets/portfolio/crm.jpg";
import hotelmenu from "../assets/portfolio/hotelmenu.jpg";
import ecommerce from "../assets/portfolio/ecommerce.jpg";
import snakeandladder from "../assets/portfolio/snakeandladder.jpg";
import language from "../assets/portfolio/language.jpg";
import portfolio from "../assets/portfolio/portfolio.jpg";


const Portfolio = () => {
    const portfolios = 
        [
            {
              id:1,
              src:contact,
              project:"Contact Managment",
             },
            {
                id:2,
                src:crm,
                project:"CRM",
            },
            {
                id:3,
                src:hotelmenu,
                project:"Hotel Menu and Billing",
            },
            {
                id:4,
                src:ecommerce,
                project:"E-commerce",
            },
           {
                id:5,
                src:snakeandladder,
                project:"Snake and Ladder Game",
            },
            {
                id:6,
                src:language,
                project:"Language Translator",
            },
            {
                id:7,
                src:portfolio,
                project:"Portfolio creation",
            },
        ]
        
            // const [selectedDescription, setSelectedDescription] = useState('');
          
            // const handleButtonClick = (description) => 
            // {
            //   setSelectedDescription(description);
            // };
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full h-full text-white 3xl:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'> 
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>MY WORKS</p>
            </div>
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
               {
                portfolios.map(({id, src,project}) => (
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center justify-center'>
                <button key={id} className='w-1/2 px-6 py-3 m-4 duartion-200 hover:scale-105'>{project}</button>
                {/* <div className="p-4 border rounded">
                <p>{selectedDescription}</p>
                </div> */}
                </div>
                </div>
                ))
               }
               </div>
        </div>

    </div>
  )
}

export default Portfolio