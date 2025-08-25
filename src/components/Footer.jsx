import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
const   Footer = () => {
  return (
        <footer className="bg-white/5 backdrop-blur-xl border-t-2 border-white/15 md:flex md:justify-between md:items-center grid place-items-center gap-5 text-white text-xl w-full p-5">

            <div className="grid place-items-center gap-1">
                <a href="https://sairam.edu.in/">
                    <img src="https://www.innovatia23.tech/sec-logo-white.png" className="w-30 h-20 rounded-xl"/>
                </a>
            </div>

            <p className="font-extralight text-lg text-center">Copyrights © 2025. All rights reserved.</p>

            <div className="grid place-items-center gap-1">
                <p className="text-center">Get connected with us through</p>
                <div className="flex pt-4 space-x-6">
                    <a href="https://www.instagram.com/mtechcsesairam/" className="hover:scale-125 active:scale-95 transition-all duration-150 rounded-full">
                        <FaInstagramSquare />
                    </a>
                    <a href="https://www.facebook.com/SairamEnggMtechCSE/" className="hover:scale-125 active:scale-95 transition-all duration-150">
                        <FaFacebookSquare />
                    </a>
                    <a href="https://in.linkedin.com/in/sairam-m-tech-cse-794733229" className="hover:scale-125 active:scale-95 transition-all  duration-150">
                        <FaLinkedin />
                    </a>
                    <a href="http://www.youtube.com/@sairam-m.tech-cse5yearinte455" className="hover:scale-125 active:scale-95 transition-all  duration-150">
                        <FaYoutubeSquare />
                    </a>
                </div>
            </div>
        </footer>
  )
}

export default Footer