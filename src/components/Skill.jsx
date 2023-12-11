import { FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTailwindCss } from "react-icons/bi";

const Skill = () => {
    return (
        <div>
            <h2 className="text-center text-4xl font-semibold text-green-600 my-7">My Skill</h2>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
                <div className="border-2 border-green-800 p-3 rounded-lg">
                    <div className="flex items-center gap-3">
                        <h2 className="text-xl font-medium">React JS </h2> <FaReact className="text-xl"></FaReact>
                    </div>
                    <p className="font-medium mt-5">I chose React for its efficiency in building scalable, dynamic interfaces. Its component-based architecture streamlines development, ensuring reusable and maintainable code across projects, resulting in faster, more responsive applications.</p>
                </div>
                <div className="border-2 border-green-800 p-3 rounded-lg">
                    <div className="flex items-center gap-3">
                        <h2 className="text-xl font-medium">Java Script </h2> <IoLogoJavascript className="text-xl"></IoLogoJavascript>
                    </div>
                    <p className="font-medium mt-5">JavaScript serves as the backbone of web development, enabling interactivity and dynamic functionalities crucial for modern applications. Its versatility, broad ecosystem, and compatibility across browsers make it indispensable for crafting robust, client-side experiences in all my projects.</p>
                </div>
                <div className="border-2 border-green-800 p-3 rounded-lg">
                    <div className="flex items-center gap-3">
                        <h2 className="text-xl font-medium">Node JS</h2> <FaNodeJs className="text-xl"></FaNodeJs>
                    </div>
                    <p className="font-medium mt-5">Node.js, with its event-driven architecture and non-blocking I/O, empowers server-side JavaScript execution. Its efficiency in handling concurrent requests and extensive package ecosystem makes it ideal for scalable, real-time applications my projects.</p>
                </div>
                <div className="border-2 border-green-800 p-3 rounded-lg">
                    <div className="flex items-center gap-3">
                        <h2 className="text-xl font-medium">Tailwind CSS</h2> <BiLogoTailwindCss className="text-xl"></BiLogoTailwindCss>
                    </div>
                    <p className="font-medium mt-5">Tailwind CSS offers a utility-first approach, streamlining styling by providing pre-built classes. Its flexibility, rapid prototyping capabilities, and customization options facilitate quick, consistent, and visually appealing designs across all my projects.</p>
                </div>


            </div>
        </div>
    );
};

export default Skill;