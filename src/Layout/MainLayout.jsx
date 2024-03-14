import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ParticleBg from "../components/ParticleBg";
import Banner from "../components/Banner";
import { useEffect, useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";




const MainLayout = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        })
    }, [])
    return (
        <div className="max-w-[1160px] mx-auto">
            <ParticleBg></ParticleBg>
            {
                loading ?
                    <PropagateLoader
                        color={'#e056fd'}
                        loading={loading}
                        size={100}
                        
                    />
                    :
                    <div className="grid grid-cols-1 md:grid-cols-6 space-y-3">
                        <div className="col-span-2 right-10"> <Banner ></Banner></div>

                        <div className="col-span-3">
                            <Outlet></Outlet>
                        </div>
                        <div><Navbar></Navbar></div>

                    </div>
            }

        </div>
    );
};

export default MainLayout;