import coverProject from "../assets/savvy care.jpg";
import coverBook from "../assets/book project1.jpg";
const Projects = () => {
  return (
    <div className="mt-3 w-[650px]">
      <h1 className=" text-3xl text-[#a55eea] font-semibold text-center uppercase">
        My Projects
      </h1>
      <div>
        <div className="card lg:card-side bg-base-100 shadow-xl mx-auto  mt-10">
          <figure>
            <img
              className="w-[300px] h-[270px] rounded-lg"
              src={coverProject}
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Smile Savvy Care</h2>
            <p className="mt-8">
              Website Live Link:{" "}
              <a
                href="https://savvy-care.web.app/"
                className="underline text-cyan-500"
              >
                savvy care.com
              </a>
            </p>
            <p>
              Github Link:{" "}
              <a
                href="https://github.com/alaminakash754/savvy-care-client"
                className="underline text-cyan-500"
              >
                savvy care github.com
              </a>
            </p>

            <div className="card-actions ">
              <a
                href="autoZone"
                className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
              >
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
                <span className="relative">Details</span>
              </a>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl mx-auto  mt-10">
          <figure>
            <img className="w-[300px] h-[270px]" src={coverBook} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Book Wave Tech</h2>
            <p className="mt-8">
              Website Live Link:{" "}
              <a
                href="https://frightening-land.surge.sh/"
                className="underline text-cyan-500"
              >
                book wave.com
              </a>
            </p>
            <p>
              Github Link:{" "}
              <a
                href="https://github.com/Porgramming-Hero-web-course/b8a11-client-side-alaminakash754"
                className="underline text-cyan-500"
              >
                book wave github.com
              </a>
            </p>

            <div className="card-actions">
              <a
                href="bookWave"
                className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
              >
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
                <span className="relative">Details</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
