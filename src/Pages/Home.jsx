import Banner from "../components/Banner";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Qualification from "../components/Qualification";
import Skill from "../components/Skill";
import Contact from "./Contact/Contact";


const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Skill></Skill>
            <Qualification></Qualification>
            <Experience></Experience>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>

        </div>
    );
};

export default Home;