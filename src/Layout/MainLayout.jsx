import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ParticleBg from "../components/ParticleBg";
import Banner from "../components/Banner";




const MainLayout = () => {
    return (
        <div className="max-w-[1160px] mx-auto ">
            <ParticleBg></ParticleBg>
            {/* <Navbar></Navbar>
            <Outlet></Outlet> */}
            <div className="grid grid-cols-1 md:grid-cols-6 space-y-3">
                <div className="col-span-2 right-10"> <Banner ></Banner></div>

                <div className="col-span-3">
                    <Outlet></Outlet>
                </div>
                <div><Navbar></Navbar></div>

            </div>
        </div>
    );
};

export default MainLayout;