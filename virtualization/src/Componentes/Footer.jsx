import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
const Footer = () => {
    return (
        <>
            <footer className="bg-gray-800 py-8 rounded-t-3xl">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0">
                            <p className="text-white text-sm">&copy; {new Date().getFullYear()} Nitheshwaran. All rights reserved.</p>
                            <p className="text-white text-sm">Available for opportunities</p>
                        </div>
                        <div className="w-full md:w-1/2 text-center md:text-right">
                            <ul className="flex justify-center md:justify-end">
                                <li className="mx-2">
                                    <a href="mailto:nitheshwaran003@gmail.com" className="text-gray-400 hover:text-white transition duration-300" target="_blank" rel="noopener noreferrer" onClick={'handleHireClick'}>
                                        <span className="sr-only">Mail</span>
                                        <BiLogoGmail />

                                    </a>
                                </li>
                                <li className="mx-2">
                                    <a href="https://www.linkedin.com/in/nitheshwaran/" className="text-gray-400 hover:text-white transition duration-300" target="_blank" rel="noopener noreferrer">
                                        <span className="sr-only">LinkedIn</span>
                                        <FaLinkedin />

                                    </a>
                                </li>
                                <li className="mx-2">
                                    <a href="https://github.com/Nithesh005" className="text-gray-400 hover:text-white transition duration-300"
                                        target="_blank" rel="noopener noreferrer">
                                        <span className="sr-only">Twitter</span>
                                        <FaGithub />
                                    </a>
                                </li>
                                <li className="mx-2">
                                    <a href="https://www.instagram.com/nithesh_wise_vista/" className="text-gray-400 hover:text-white transition duration-300" target="_blank" rel="noopener noreferrer">
                                        <span className="sr-only">LinkedIn</span>
                                        {/* <LinkedIn /> */}
                                        <GrInstagram />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
export default Footer;