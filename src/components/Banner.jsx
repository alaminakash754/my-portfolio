import coverPhoto from '../assets/my pic.jpg';
import './button/Button.css'
import { Link } from 'react-router-dom';
import '../style/style.css'
import { MdDownload } from 'react-icons/md';
import resume from '../assets/personal branding.pdf'

const Banner = () => {
    let year = new Date().getFullYear()
    return (



        <div className='space-y-14'>
            <div className='box right-10 md:top-6'>
                <div className='content'>
                    <img src={coverPhoto} alt="" />
                    <h2>Designing interfaces <br /> <span>coding with flair</span> </h2>
                    <Link to='contact'><p>Hire Me</p></Link>
                </div>
            </div>
            <div className='ml-5'>
                <p> <span>&#169;</span>  {year} Alamin Akash- All Right Reserved </p>
                {/* <a href={resume} download="Resume"><button className='bg-green-600 rounded-lg mt-5 ml-8 p-2 text-xl font-medium flex items-center justify-center gap-3 text-center transform hover:scale-110 hover:bg-opacity-50 end-auto duration-300   shadow-lime-400 hover:transition-transform hover:bg-origin-border'>Download Resume <p className='mt-2'><MdDownload /></p></button></a> */}
                <a href={resume} download="Resume" className="relative inline-flex items-center justify-center px-6 py-3 mt-5 ml-12 overflow-hidden font-bold text-white rounded-lg shadow-2xl group">
                                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
                                {/* <!-- Top glass gradient --> */}
                                <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                                {/* <!-- Bottom gradient --> */}
                                <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                                {/* <!-- Left gradient --> */}
                                <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                                {/* <!-- Right gradient --> */}
                                <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                                <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                                <span className="relative block">Download Resume <MdDownload className='ml-16 mt-2'/></span>
                            </a>
            </div>
        </div>


        // <div className=" pr-6">
        //     <h1 className="text-5xl">Hi, I'm Alamin!</h1>

        //     <p className='mt-10 text-justify font-semibold text-lg'>Welcome to my portfolio! I specialize in crafting immersive user experiences as a front-end developer. With a passion for clean code and innovative design, I bring concepts to life using HTML, CSS, and JavaScript. Proficient in frameworks like React and Vite, I strive to create responsive and visually stunning interfaces that elevate user engagement and satisfaction.</p>
        //     <a href={resume} download="Resume"><button className='bg-green-600 rounded-lg mt-10 p-3 text-xl font-medium flex items-center justify-center gap-3 text-center transform hover:scale-110 hover:bg-opacity-50 end-auto duration-300   shadow-lime-400 hover:transition-transform hover:bg-origin-border'>Download Resume <p className='mt-2'><MdDownload/></p></button></a>

        //     <Link to='about'><button className="button"> <span className="button__icon"><FaArrowRight className="mt-5 ml-5" /></span> <span>More About me</span>  </button></Link>
        // </div>


    );
};

export default Banner;