import img from '/home/janewmwaura/personalprojectportfolio/Personal-portfolio/personalportfolio/src/assets/jane.jpg';

const About = () => {
    return (
        <div  id= 'About' className="lg:px-56 px-10 lg:py-0 py-20 gap-5 flex lg:flex-row flex-col justify-between lg:gap-28 items-center">
            <img data-aos='fade-up'
                src={img} 
                width={290} 
                height={290} 
                className='square border-2 p-1 border-purple-800 img_glow' 
                alt="Profile"
            />
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white text-left">
                <h1 data-aos='fade-right'className="text-[52px] font-semibold mb-8 leading-normal">
                    <span className="text-purple-800">ABOUT ME</span>
                </h1>
                <p data-aos='fade-left'>
                Hi, I’m Jane Wairimu Mwaura, a full-stack developer with a background in software engineering. 
                I’ve recently completed my studies at Moringa School and transitioned from a career in sales to tech. 
                I’m passionate about web development, especially front-end technologies like React and Tailwind CSS, and back-end development with Flask. 
                I’m currently looking for opportunities to apply my skills in dynamic environments where I can continue learning and growing. 
                My ultimate goal is to contribute to impactful projects that solve real-world problems.</p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
