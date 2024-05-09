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
        Welcome to my portfolio! I specialize in crafting immersive user
        experiences as a full-stack developer. With expertise in HTML, CSS, and
        JavaScript, along with frameworks like React and Vite, I create visually
        stunning interfaces. Recently, I've expanded my skills to include
        Node.js and Express.js for backend development, alongside MongoDB for
        database management. I also leverage TypeScript for enhanced code
        quality. My goal is to deliver seamless experiences that not only look
        great but also function flawlessly. Let's build something amazing
        together!
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
