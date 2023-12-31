import coverPhoto from '../assets/my pic.jpg';
import { MdDownload } from "react-icons/md";
import resume from '../assets/personal branding.pdf'

const Banner = () => {
    return (
        <div className="bg-gradient-to-r from-black to-blue-950 grid sm:grid-cols-1 md:grid-cols-2  gap-10 h-[500px] p-6">
            <div className=" ml-5">
                <h1 className="text-5xl">Hi, I'm Alamin!</h1>

                <p className='mt-10 text-justify font-semibold text-lg'>Welcome to my portfolio! I specialize in crafting immersive user experiences as a front-end developer. With a passion for clean code and innovative design, I bring concepts to life using HTML, CSS, and JavaScript. Proficient in frameworks like React and Vite, I strive to create responsive and visually stunning interfaces that elevate user engagement and satisfaction.</p>
                <a href={resume} download="Resume"><button className='bg-green-600 rounded-lg mt-10 p-3 text-xl font-medium flex items-center justify-center gap-3 text-center'>Download Resume <p className='mt-2'><MdDownload/></p></button></a>
            </div>
            <div className="ml-14">
                <img className='rounded-full w-[400px] h-[400px] ' src={coverPhoto} alt="" />
            </div>
        </div>
    );
};

export default Banner;