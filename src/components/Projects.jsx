import { Link } from 'react-router-dom';
import coverProject from '../assets/bike project.jpg';
import coverBook from '../assets/book project1.jpg'
const Projects = () => {
    return (
        <div className='mt-10'>
            <h1 className=' text-3xl text-green-500 font-semibold text-center uppercase'>My Projects</h1>
            <div>
                <div className="card lg:card-side bg-base-100 shadow-xl mx-auto w-[900px] mt-10">
                    <figure><img className='w-[400px] h-[300px]' src={coverProject} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">The Auto Zone</h2>
                        <p className='mt-8'>Website Live Link:  <a href="https://the-auto-zone.web.app/" className='underline text-green-500'>auto zone.com</a></p>
                        <p>Github Link:  <a href="https://github.com/programming-hero-web-course-4/b8a10-brandshop-client-side-alaminakash754" className='underline text-green-500'>auto zone github.com</a></p>

                        <div className="card-actions justify-end">
                           <Link to='/autoZone'> <button className="btn btn-primary">Details</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl mx-auto w-[900px] mt-10">
                    <figure><img className='w-[400px] h-[300px]' src={coverBook} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Book Wave Tech</h2>
                        <p className='mt-8'>Website Live Link:  <a href="https://frightening-land.surge.sh/" className='underline text-green-500'>book wave.com</a></p>
                        <p>Github Link:  <a href="https://github.com/Porgramming-Hero-web-course/b8a11-client-side-alaminakash754" className='underline text-green-500'>book wave github.com</a></p>

                        <div className="card-actions justify-end">
                           <Link to='/bookWave'> <button className="btn btn-primary">Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;