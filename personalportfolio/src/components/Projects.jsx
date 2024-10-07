import React from "react";
import FitClub  from '/home/janewmwaura/personalprojectportfolio/Personal-portfolio/personalportfolio/src/assets/FitClub.png';
import HutleMarketplace from '/home/janewmwaura/personalprojectportfolio/Personal-portfolio/personalportfolio/src/assets/HutleMarketplace.png';
const Projects = () => {
    return (
        <div className="p-20 flex flex-col items-center justify-center">
            <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-purple-800">Projects</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
            <a href="https://fitnessclub-6am.pages.dev" target="_blank" rel="noopener noreferrer">
                    <img 
                        className="text -[26px] flex items-center justify-center rounded-3xl h-36 w-44 border-2 border-purple-800 b_glow" 
                        src={FitClub} 
                        alt="FitClub Project" 
                    />
                </a>
            <a href="https://the-hustle-market-place-the-hustle.onrender.com" target="_blank" rel="noopener noreferrer">
                <img className="text -[26px] flex items-center justify-center rounded-3xl h-36 w-44 border-2 border-purple-800 b_glow"
                src={HutleMarketplace} 
                alt="HutleMarketplace" />

            </a>    
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default Projects;