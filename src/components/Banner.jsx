import coverPhoto from '../assets/my pic.jpg';
import { MdDownload } from "react-icons/md";
import resume from '../assets/personal branding.pdf'
import { FaArrowRight } from 'react-icons/fa';
import './button/Button.css'
import { Link } from 'react-router-dom';
import '../style/style.css'

const Banner = () => {
    return (
        <div className=" grid sm:grid-cols-1 md:grid-cols-2  gap-10 h-[500px] p-6">
            <div className=" ml-5">
                <h1 className="text-5xl">Hi, I'm Alamin!</h1>

                <p className='mt-10 text-justify font-semibold text-lg'>Welcome to my portfolio! I specialize in crafting immersive user experiences as a front-end developer. With a passion for clean code and innovative design, I bring concepts to life using HTML, CSS, and JavaScript. Proficient in frameworks like React and Vite, I strive to create responsive and visually stunning interfaces that elevate user engagement and satisfaction.</p>
                <a href={resume} download="Resume"><button className='bg-green-600 rounded-lg mt-10 p-3 text-xl font-medium flex items-center justify-center gap-3 text-center transform hover:scale-110 hover:bg-opacity-50 end-auto duration-300   shadow-lime-400 hover:transition-transform hover:bg-origin-border'>Download Resume <p className='mt-2'><MdDownload/></p></button></a>

                <Link to='about'><button className="button"> <span className="button__icon"><FaArrowRight className="mt-5 ml-5" /></span> <span>More About me</span>  </button></Link>
            </div>
            <div className="ml-14">
                <div className='box'>
                    <div className='content'>
                        <img src={coverPhoto} alt="" />
                        <h2>Designing interfaces <br /> <span>coding with flair</span> </h2>
                        <a href="contact">Hire Me</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;