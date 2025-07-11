import React from 'react';
import thunderclient from '../assets/ThunderClient.png';
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

const Skill = () => {
    return (
        <div id="skills" className='bg-gray-900 text-white min-h-screen flex flex-col items-center pt-16 px-6'>
            <h2 className='text-blue-100 font-bold text-3xl sm:text-4xl md:text-5xl mb-12 text-center'>
                Tools and Technologies I Used
            </h2>

            <div className='border-2 border-blue-200 p-6 rounded-3xl bg-gray-800 w-full max-w-6xl mx-auto'>
                {/* Images container-1 */}
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-12'>
                    <img src={HTML} alt="HTML" className='h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 mx-auto transform transition-transform duration-300 hover:scale-110' />
                    <img src={CSS} alt="CSS" className='h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 mx-auto transform transition-transform duration-300 hover:scale-110' />
                    <img src={JS} alt="JS" className='h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 mx-auto transform transition-transform duration-300 hover:scale-110' />
                    <img src={thunderclient} alt="ThunderClient" className='h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 mx-auto transform transition-transform duration-300 hover:scale-110' />
                </div>

                {/* Images container-2 */}
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-12'>
                    <img src={react} alt="React" className='h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 mx-auto transform transition-transform duration-300 hover:scale-110' />
                    <img src={detNet} alt="detNet" className='h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 mx-auto transform transition-transform duration-300 hover:scale-110' />
                    <img src={ssms} alt="SSMS" className='h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 mx-auto transform transition-transform duration-300 hover:scale-110' />
                    <img src={androidstudio} alt="Android Studio" className='h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 mx-auto transform transition-transform duration-300 hover:scale-110' />
                </div>

                {/* Images container-3 */}
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8'>
                    <img src={vscode} alt="VSCode" className='h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 mx-auto transform transition-transform duration-300 hover:scale-110' />
                    <img src={kotlin} alt="Kotlin" className='h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 mx-auto transform transition-transform duration-300 hover:scale-110' />
                    <img src={C} alt="C" className='h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 mx-auto transform transition-transform duration-300 hover:scale-110' />
                    <img src={tailwind} alt="Tailwind" className='h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 mx-auto transform transition-transform duration-300 hover:scale-110' />
                </div>
            </div>
        </div>
    )
}

export default Skill;
