import Experience from "../../components/Experience";
import Qualification from "../../components/Qualification";
import Skill from "../../components/Skill";

const About = () => {
    return (
        <div className="space-y-5">
            <Skill></Skill>
            <Qualification className="mt-20"></Qualification>
            <Experience></Experience>
        </div>
    );
};

export default About;