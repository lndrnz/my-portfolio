import ProjectItem from "./ProjectItem";
import { FaGithub } from "react-icons/fa";
import carcargo from "../../assets/carcargo.jpeg";
import digitaltownsq from "../../assets/digitaltownsq.jpeg";
import taskmanager from "../../assets/taskmanager.jpeg";
import yoovies from "../../assets/yoovies.jpeg";


const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] dark:text-white">
        Software Engineering Projects
      </h1>
      <p className="flex justify-center text-center py-8 font-bold">
        <a className="flex justify dark:text-white "href="https://github.com/lndrnz">
          My GitHub
          <FaGithub size={25} />
        </a>
      </p>

      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={digitaltownsq}
          title="DigitalTownSq"
          link="https://digitaltownsq.web.app/"
        />
        <ProjectItem
          img={yoovies}
          title="Yoovies"
          link="https://yoovies.gitlab.io/yelp-for-movies/"
        />
        <ProjectItem
          img={carcargo}
          title="CarCarGo"
          link="https://github.com/lndrnz/carcargo"
        />
        <ProjectItem
          img={taskmanager}
          title="TaskManager"
          link="https://github.com/lndrnz/taskmanager"
        />
      </div>
    </div>
  );
};
export default Projects;
