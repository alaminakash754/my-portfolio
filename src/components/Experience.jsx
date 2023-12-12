import { FaConnectdevelop } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import { CgPerformance } from "react-icons/cg";


const Experience = () => {
    return (
        <div className="bg-gradient-to-r from-blue-950 to-gray-800 mt-10 my-5 space-y-10 h-[500px]">
            <h1 className="uppercase text-4xl text-center font-semibold text-green-500 mt-20">My Services</h1>
            <h4 className="text-lg font-medium text-center my-5 ">Crafting Responsive Interfaces, Optimizing Performance, <br /> Ensuring Accessible & Seamless Websites.</h4>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5 ">
                <div className="border-b-4 border-t-4 border-gray-400 p-3 rounded-md">
                    <div className="flex items-center gap-3">
                        <h2 className="text-lg font-medium text-green-400">Front-End Development Expertise </h2> <FaConnectdevelop></FaConnectdevelop>
                    </div>
                    <p className="font-medium mt-5 text-justify">I specialize in crafting engaging and responsive user interfaces using HTML, CSS, and JavaScript. I have extensive experience working with React to build dynamic and scalable web applications.</p>
                </div>
                <div className="border-b-4 border-t-4 border-green-800 p-3 rounded-lg">
                    <div className="flex items-center gap-3">
                        <h2 className="text-lg font-medium text-green-400">User Interface (UI) Design </h2> <SiAntdesign></SiAntdesign>
                    </div>
                    <p className="font-medium mt-5 text-justify">I focus on crafting intuitive and aesthetically pleasing user interfaces that enhance user interaction and engagement.</p>
                    
                </div>
                <div className="border-b-4 border-t-4 border-gray-400 p-3 rounded-lg">
                <div className="flex items-center gap-3">
                        <h2 className="text-lg font-medium text-green-400">Performance Optimization</h2> <CgPerformance></CgPerformance>
                    </div>
                    <p className="font-medium mt-5 text-justify">I optimize websites by employing techniques like code minification, image optimization, and lazy loading to enhance loading speed and performance.</p>
                    
                </div>



            </div>

        </div>
    );
};

export default Experience;