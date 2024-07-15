import img from '../assets/profile3.JPG';

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
                    Although Scott said it didn't matter to him, he knew deep inside that it did. 
                    They had been friends as long as he could remember and not once had he had to
                    protest that something Joe apologized for doing didn't really matter. 
                    Scott stuck to his lie and insisted again and again that everything was fine as Joe continued to apologize. 
                    Scott already knew that despite his words accepting the apologies that their friendship would never be the same.
                </p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                            {/* Additional content can go here */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
