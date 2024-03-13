import './Contact.css'
import { LiaSearchLocationSolid } from "react-icons/lia";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
const Contact = () => {
    return (
        <div>
            <div className="contact bg-fixed w-[650px]">

                <div className='justify-center items-center p-36 mt-4 bg-slate-500 opacity-70 text-center mx-auto'>
                    <h2 className='text-3xl mb-10 text-green-500 font-semibold text-center uppercase'>My Newsletter</h2>
                    <div className='border-2 border-green-300 h-20 p-4 inline-flex'>
                        <input type="text" placeholder="Enter Your Email" className="input input-bordered input-accent w-[200px] max-w-xs" />
                        {/* <button className='p-2 ml-2 bg-[#55E6A5] font-semibold rounded-lg text-white'>Notify Now</button> */}
                        <a href="" className="relative inline-flex items-center justify-center p-2 ml-4 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
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
                                <span className="relative">Notify Now</span>
                            </a>
                    </div>

                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-10 mt-4 pb-2 mr-4'>
                <div className='flex items-center justify-center gap-10'>
                    <LiaSearchLocationSolid className='text-5xl text-green-500'></LiaSearchLocationSolid>
                    <div>
                        <h2>Address</h2>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-10'>
                    <BsTelephoneOutboundFill className='text-3xl text-green-500'></BsTelephoneOutboundFill>
                    <div>
                        <h2>Lets Talk Me</h2>
                        <p>+8801686239754</p>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-10'>
                    <MdMarkEmailRead className='text-5xl text-green-500'></MdMarkEmailRead>
                    <div>
                        <h2>Send Email</h2>
                        <p>alaminakash9754@gmail.com</p>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Contact;