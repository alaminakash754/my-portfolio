const Qualification = () => {
    return (
        <div className="h-[400px] w-[650px]  mb-10">
            <h1 className="text-3xl mt-24 text-[#a55eea] font-semibold text-center">My Academic Qualification</h1>
            <ul className="timeline timeline-vertical mt-10">
                <li>
                    <div className="timeline-start timeline-box border-green-700">B.Sc. in Computer Science & Engineering <br />
                        Daffodil Institute of IT <br />
                        Session: 2013-2017</div>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <hr className="bg-primary" />
                </li>
                <li>
                    <hr className="bg-primary" />


                    <hr className="bg-primary" />
                </li>
                <li>
                    <hr className="bg-primary" />


                    <hr className="bg-primary" />
                    <hr />

                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end timeline-box border-gray-400">M.Sc. in Computer Science & Engineering <br /> Institute of Science and Technology <br /> Session: 2017-2018 </div>

                </li>

            </ul>
        </div>
    );
};

export default Qualification;