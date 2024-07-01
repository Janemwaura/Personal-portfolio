import {AiFillGithub} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';
import {FiTwitter} from 'react-icons/fi';
import {FaInstagram} from 'react-icons/fa';
const Banner = () => {
    return (
        <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
            <div className=" h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1 className="text-[52px] font-semibold mb-8 leading-normal">Welcome To <span className="text-purple-800">My Website</span></h1>
                <p>Although Scott said it didn't matter to him, he knew deep inside that it did. 
                    They had been friends as long as he could remember and not once had he had to
                    protest that something Joe apologized for doing didn't really matter. 
                    Scott stuck to his lie and insisted again and again that everything was fine as Joe continued to apologize. 
                    Scott already knew that despite his words accepting the apologies that their friendship would never be the same.</p>
                    <div className="flex mt-8 gap-2">
                        <div className="flex items-center justify-center">
                            <div className="flex space-x-2">
                                <a href="" className="text-purple-800 hover:text-purple-800 rounded-full glow p-2">
                                   <AiFillGithub className="text-[28px]" />
                                </a>    
                                <a href="" className="text-purple-800 hover:text-purple-800 rounded-full glow p-2">
                                   <FaLinkedinIn className="text-[28px]" />
                                </a>    
                                <a href="" className="text-purple-800 hover:text-purple-800 rounded-full glow p-2">
                                   <FiTwitter className="text-[28px]" />
                                </a>    
                                <a href="" className="text-purple-800 hover:text-purple-800 rounded-full glow p-2">
                                   <FaInstagram className="text-[28px]" />
                                </a>    
                                   

                            
                                
                            </div>

                        </div>

                    </div>
            </div>
        </div>
    );
};

export default Banner;