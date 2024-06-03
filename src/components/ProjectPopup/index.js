import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import ProjectSlider from '../ProjectSlider';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Link } from 'react-router-dom';

function ProjectPopup({ project }) {

    console.log(project)
    if (project == null) {
        return <></>;
    }
    return (
        <div className='popup-container max-w-[1200px]'>
            <div className='p-[50px] grid grid-cols-2 bg-[#252525] text-[#fff] w-[100%]'>
                <div className='project-title col-span-1 mx-[20px]'>
                    <div className='uppercase text-[33px] text-[#ffb400] font-bold relative border-b-[3px] border-b-solid border-b-hsla-border
                after:bg-[#ffb400] after:h-[3px] after:l-[0] after:w-1/2 after:absolute after:bottom-[-3px] after:left-0 mb-[16px]'>
                        {project.name}
                    </div>
                    <div onClick={() => { console.log(project) }}>
                        <ProjectSlider project={project} />
                    </div>
                </div>

                <div className='project-description col-span-1 mx-[20px]'>
                    <div className='uppercase text-[33px] text-[#ffb400] font-bold relative border-b-[3px] border-b-solid border-b-hsla-border
                after:bg-[#ffb400] after:h-[3px] after:l-[0] after:w-1/2 after:absolute after:bottom-[-3px] after:left-0 mb-[16px]'>
                        Description
                    </div>
                    <ul>
                        <li className='block text-[15px] mb-[10px] font-semibold'>
                            <span>{project.description}</span>
                        </li>
                        <li className='block'>Create time: <span className='font-semibold'>
                            {project.createTime}</span>
                        </li>
                        <li className='block'>Team size: <span className='font-semibold'>{project.teamSize}</span></li>
                        <li className='block'>Github: <Link to={"https://github.com/quangnv1911/Portfolio"} className='font-semibold text-[#ffb400]'>{project.gitLink}</Link></li>
                        <li className='block'>Demo Link: <Link to={"https://github.com/quangnv1911/Portfolio"} className='font-semibold text-[#ffb400]'>{project.demoLink}</Link></li>
                        <li className='block'>Front End: <span className='font-semibold'>{project.frontEnd}</span></li>
                        <li className='block'>Back End: <span className='font-semibold'>{project.backEnd}</span></li>
                        <li>Other Tech: <span className='font-semibold'>{project.otherTech}</span></li>


                    </ul>
                </div>
            </div>
        </div>

    );
}

export default ProjectPopup;