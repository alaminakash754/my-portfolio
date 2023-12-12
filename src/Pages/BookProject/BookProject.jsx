

const BookProject = () => {
    return (
        <div>
            <h1 className="text-3xl text-green-500 font-semibold text-center mb-10">Book Wave Tech</h1>
            <p className="font-medium text-lg ml-5 mb-4">Here some screen shot of my project:</p>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src='https://i.ibb.co/17Bryyb/book-project2.jpg' className="w-full h-[800px] rounded-lg" />


                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full ">
                    <img src='https://i.ibb.co/r4gNc5H/book-project4.jpg' className="w-full h-[800px] rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full ">
                    <img src='https://i.ibb.co/mNBK9SQ/book-project3.jpg' className="w-full h-[800px] rounded-lg" />


                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full ">
                    <img src='https://i.ibb.co/NLrsbP6/book-project5.jpg' className="w-full h-[800px] rounded-lg" />

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BookProject;