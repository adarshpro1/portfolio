import React from 'react'
import html from '../assets/html.png';
import node from '../assets/node.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactimage from '../assets/react.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';
import flutter from '../assets/flutter.png';
import dart from '../assets/dart.png';
import tomcat from '../assets/tomcat.png';
import springboot from '../assets/springboot.png';
import mysql from '../assets/mysql.png';
import maven from '../assets/maven.png';
import bootstrp from '../assets/bootstrap.png';
import postman from '../assets/postman.png';
import java from '../assets/java.png'

const Experience = () => {
    const techs=
    [
        {
            id:1,
            src:html,
            title:"HTML",
            style:"shadow-orange-500"
        },
        {
            id:2,
            src:css,
            title:"CSS",
            style:"shadow-blue-500"
        },
        {
            id:3,
            src:javascript,
            title:"JAVASCRIPT",
            style:"shadow-yellow-500"
        },
        {
            id:4,
            src:springboot,
            title:"SPRING-BOOT",
            style:"shadow-green-500"
        },
        {
            id:5,
            src:reactimage,
            title:"REACT",
            style:"shadow-sky-600"
        },
        {
            id:6,
            src:tailwind,
            title:"TAILWIND",
            style:"shadow-sky-400"
        },
        {
            id:7,
            src:github,
            title:"GITHUB",
            style:"shadow-gray-400"
        },
        {
            id:8,
            src:flutter,
            title:"FLUTTER",
            style:"shadow-blue-800"
        },
        {
            id:9,
            src:dart,
            title:"DART",
            style:"shadow-blue-300"
        },
        {
            id:10,
            src:node,
            title:"NODE",
            style:"shadow-green-500"
        },
        {
            id:11,
            src:tomcat,
            title:"TOMCAT",
            style:"shadow-yellow-700"
        },
        {
            id:12,
            src:maven,
            title:"MAVEN",
            style:"shadow-pink-500"
        },
        {
            id:13,
            src:mysql,
            title:"MySQL",
            style:"shadow-orange-400"
        },
        {
            id:14,
            src:postman,
            title:"POSTMAN",
            style:"shadow-orange-600"
        },
        {
            id:15,
            src:bootstrp,
            title:"BOOTSTRAP",
            style:"shadow-violet-600"
        },
        {
            id:16,
            src:java,
            title:"JAVA",
            style:"shadow-red-900"
        }

       
    ]
  return (
    <div name="skills" className='bg-gradient-to-b from-gray-800 to-black w-full 3xl:h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
                    Skills
                </p>
                <p className='py-6'>
                    TECHNOLOGIES I KNOW
                </p>
            </div> 

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>
            {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
             {/* <div  className={`shadow-md hover:scale-105 duration-500 py-2 rounder-lg`}>
                    <img src={html} alt=""  className=' w-20 mx-auto'/>
                    <p className='mt-4'>
                        HTML
                    </p>
                  </div> */}
              
            </div>
        </div>
    </div>
  )
}

export default Experience