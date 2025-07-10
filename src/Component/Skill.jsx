import React from 'react'
import thunderclient from '../assets/ThunderClient.png'
import HTML from '../assets/HTML_logo.png';
import CSS from '../assets/CSS.png';
import JS from '../assets/javascript.png';
import react from '../assets/react.svg';
import detNet from '../assets/detNet.png';
import ssms from '../assets/SSMS.png';
import androidstudio from '../assets/AndroidStudio.png';
import vscode from '../assets/vsCode.png';
import kotlin from '../assets/kotlin.png';
import C from '../assets/C.png';
import tailwind from '../assets/Tailwind.png';
//Visual Studio 2022


const Skill = () => {
    return (
        <div   id="skills" className='bg-gray-900  text-white min-h-screen flex flex-col items-center pt-16'>
            <h2 className=' text-blue-100 font-bold mt-10 text-4xl mb-20'>
               Tools and Technologies I Used
            </h2>

            <div className='border-blue-200 border-2 p-4 m-2 mb-10 rounded-2xl bg-gray-800'>

                {/* Images container */}
                <div className='flex gap-10 mb-10'>
                    <img src={HTML} alt="HTML" className='rounded-4xl h-50 w-50 scale-100 hover:scale-95' />
                    <img src={CSS} alt="CSS" className='rounded-4xl h-50 w-50 scale-100 hover:scale-95' />
                    <img src={JS} alt="JS" className='rounded-4xl h-50 w-50 scale-100 hover:scale-95' />
                    <img src={thunderclient} alt="ThunderClient" className='rounded-4xl h-50 w-50 scale-100 hover:scale-95' />
                    <img src={react} alt="React" className='rounded-4xl h-50 w-50 scale-100 hover:scale-95' />
                </div>

                {/* Images container-2 */}
                <div className='flex gap-10 justify-center mb-10'>
                    <img src={detNet} alt="detNet" className='rounded-4xl h-50 w-50 scale-100 hover:scale-95' />
                    <img src={ssms} alt="ssms" className='rounded-4xl h-50 w-50 scale-100 hover:scale-95' />
                    <img src={androidstudio} alt="androidstudio" className='rounded-4xl h-50 w-50 scale-100 hover:scale-95' />
                    <img src={vscode} alt="React" className='rounded-4xl h-50 w-50 scale-100 hover:scale-95' />
                </div>

                {/* Images container-3 */}
                <div className='flex gap-10 justify-center'>
                    <img src={kotlin} alt="detNet" className='rounded-4xl h-50 w-50 scale-100 hover:scale-95' />
                    <img src={C} alt="ssms" className='rounded-4xl h-50 w-50 scale-100 hover:scale-95' />
                    <img src={tailwind} alt="androidstudio" className='rounded-4xl h-50 w-50 scale-100 hover:scale-95' />
                </div>
            </div>
        </div>
    )
}

export default Skill
