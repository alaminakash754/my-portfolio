import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
// import ParticleBg from "../components/ParticleBg";




const MainLayout = () => {
    return (
        <div className="max-w-[1160px] mx-auto space-y-3">
          {/* <ParticleBg></ParticleBg> */}
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;