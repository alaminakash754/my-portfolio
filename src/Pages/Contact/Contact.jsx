import './Contact.css'
import { LiaSearchLocationSolid } from "react-icons/lia";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
const Contact = () => {
    return (
        <div>
            <div className="contact bg-fixed">

                <div className='justify-center items-center p-36 mt-20 bg-slate-500 opacity-70 text-center mx-auto'>
                    <h2 className='text-3xl mb-10 text-green-500 font-semibold text-center uppercase'>My Newsletter</h2>
                    <div className='border-2 border-green-300 h-20 p-4'>
                        <input type="text" placeholder="Enter Your Email" className="input input-bordered input-accent w-full max-w-xs" />
                        <button className='p-3 bg-[#55E6A5] font-semibold rounded-lg ml-5 text-white'>Notify Now</button>
                    </div>

                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-10 mt-10 pb-2 mr-10'>
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