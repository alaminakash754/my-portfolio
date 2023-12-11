import coverPhoto from '../assets/my pic.jpg';
const Banner = () => {
    return (
        <div className="bg-gradient-to-r from-black to-blue-800 grid md:grid-cols-2 sm:grid-cols-1 gap-10 h-[600px] p-6">
            <div className=" ml-5">
                <h1 className="text-5xl">Hi, I'm Alamin!</h1>

                <p className='mt-10 text-justify font-semibold text-lg'>Welcome to my portfolio! I specialize in crafting immersive user experiences as a front-end developer. With a passion for clean code and innovative design, I bring concepts to life using HTML, CSS, and JavaScript. Proficient in frameworks like React and Vue.js, I strive to create responsive and visually stunning interfaces that elevate user engagement and satisfaction.</p>
            </div>
            <div className="">
                <img className='rounded-full w-[450px] h-[400px] items-center justify-center' src={coverPhoto} alt="" />
            </div>
        </div>
    );
};

export default Banner;