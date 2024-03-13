// import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import '../style/style.css';
// import logo fom '../assets/logo.jpg'
const Navbar = () => {

    //     const navLink = document.querySelectorAll('.nav__link')

    // function linkColor(){
    //     navLink.forEach(link => link.classList.remove('active-link'))
    //     this.classList.add('active-link')
    // }
    // navLink.forEach(link => link.addEventListener('click', linkColor))

    // const [activeLink, setActiveLink] = useState(null);

    // const linkColor = (event) => {
    //     const clickedLink = event.target;
    //     setActiveLink(clickedLink);
    // };


    // const navLinks = <>
    //     <li><NavLink to="/"
    //         className={({ isActive, isPending }) =>
    //             isPending ? "pending" : isActive ? " font-bold text-lg text-green-400 hover:bg-gray-200 hover:text-green-400 " : " hover:text-green-400"
    //         }>Home</NavLink></li>

    //     <li><NavLink to="/projects"
    //         className={({ isActive, isPending }) =>
    //             isPending ? "pending" : isActive ? " font-bold  text-lg text-green-400 hover:bg-gray-200 hover:text-green-400  " : " hover:text-green-400"
    //         }>My Projects</NavLink></li>



    //     <li><NavLink to="/contact"
    //         className={({ isActive, isPending }) =>
    //             isPending ? "pending" : isActive ? " text-lg text-green-400 hover:bg-gray-200 hover:text-green-400 font-bold " : " hover:text-green-400"
    //         }>Contact</NavLink></li>

    // </>
    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick = (index) => {
        setActiveLink(index);
    };
    return (
        // <div className="navbar bg-base-200 max-w-[1160px] mx-auto">
        //     <div className="navbar-start">
        //         <div className="dropdown">
        //             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //             </div>
        //             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        //                 {navLinks}
        //             </ul>
        //         </div>
        //         <img className='w-48 h-24 rounded-3xl' src={logo} alt="" />
        //     </div>
        //     <div className="navbar-center hidden lg:flex">
        //         <ul className="menu menu-horizontal px-1">
        //             {navLinks}
        //         </ul>
        //     </div>
        //     <div className="navbar-end mr-8">
        //         <div className="dropdown">
        //             <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        //             </div>
        //             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32">
        //                 {navLinks}
        //             </ul>
        //         </div>
        //     </div>
        // </div>
        <nav className="nav">
            <ul className="nav__list">


               
                    <a href="/" className={activeLink === 0 ? 'nav__link active-link ' : ''} >

                        <span className="nav__name" onClick={() => handleLinkClick(0)}>Home</span>
                        <ion-icon name="home-outline"></ion-icon>
                    </a>
               

               
                    <a href="about" className={activeLink === 1 ? 'nav__link active-link' : ''} >

                        <span className="nav__name" onClick={() => handleLinkClick(1)}>More About me</span>
                        <ion-icon name="receipt-outline"></ion-icon>
                    </a>
               

                <a href="contact" className="nav__link ">


                    <span className="nav__name">Contact</span>
                    <ion-icon name="mail-unread-outline"></ion-icon>
                </a>

                <a href="projects" className="nav__link">

                    <span className="nav__name">My Projects</span>
                    <ion-icon name="medkit-outline"></ion-icon>
                </a>

            </ul>


        </nav>

    );
};

export default Navbar;