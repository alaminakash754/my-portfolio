import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const MyDetails = () => {
  return (
    <div
      className="w-[650px] mt-16 ml-5"
      data-aos="zoom-in"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      <h1 className="text-5xl">
        Hi, I'm Alamin <span className="text-[#a55eea]">!!!</span>{" "}
      </h1>

      <p className="mt-10 text-justify font-semibold text-lg">
        Welcome to my portfolio! As a proficient MERN stack developer, I
        specialize in building dynamic and responsive web applications. With
        expertise in React.js, JavaScript, and various React component
        libraries, I create seamless user interfaces that enhance user
        experience. My backend skills in Node.js and Express.js, coupled with
        MongoDB for database management, allow me to develop robust and scalable
        server-side solutions. I am adept at integrating animations with AOS to
        add visual appeal. My comprehensive knowledge of both frontend and
        backend development, along with a keen eye for UI design, enables me to
        deliver complete, efficient, and engaging web solutions.
      </p>

      <Link to="about">
        <button className="button left-52 top-10">
          {" "}
          <span className="button__icon">
            <FaArrowRight className="mt-5 ml-5" />
          </span>{" "}
          <span>More About me</span>{" "}
        </button>
      </Link>
    </div>
  );
};

export default MyDetails;
