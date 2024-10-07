import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="mb-4 md:mb-0">
                    <span className="text-3xl font-semibold text-fuchsia-800 py-2 uppercase"></span>
                    <p className="text-[16px] my-4">Design.Develop.Deliver</p>
                </div>
                <div>
                    <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Services</h2>
                    <ul className="text-[16px] my-4">
                        <li className="my-2">Web Design</li>
                        <li className="my-2">Web Development</li>
                        <li className="my-2">SEO</li>
                        <li className="my-2">E-commerce</li>
                    </ul>
                </div>
                <div className="mb-4 md:mb-0">
                    <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Contact</h2>
                    <p className="text-[16px] my-4">Email: mwaura461@gmail.com</p>
                    <p className="text-[16px] my-4">Phone: +254798558184</p>
                </div>
                <div>
                    <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Follow Me</h2>
                    <div className="flex space-x-4 mt-2">
                        <a 
                        className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" 
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/Janemwaura">
                        <FaGithub className="text-2xl" />
                        </a>
                        <a 
                        className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out"
                        target="_blank"
                        rel="noopener noreferrer" 
                        href="https://www.linkedin.com/in/jane-mwaura-wairimu">
                        <FaLinkedinIn className="text-2xl" />
                        </a>
                        {/*<a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href="">
                            <FaTwitter className="text-2xl" />
                        </a>
                        <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href="">
                            <FaInstagram className="text-2xl" />
                        </a>*/}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
