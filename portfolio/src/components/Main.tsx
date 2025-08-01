import { TypeAnimation } from "react-type-animation";
import profile from "./../assets/profile.jpeg";
import Background from "./../assets/Background.jpeg";
import { FaLinkedinIn, FaGithub} from "react-icons/fa"; //FaRegFileAlt 
// import LanderNunezResume from "./../assets/LanderNunezResume.pdf";
const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full bg-fixed h-screen object-cover object-left"
        src={Background}
      ></img>
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50 dark:bg-transparent ">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <img
            src={profile}
            width={200}
            height={200}
            className="rounded-full border-solid border-2 border-slate-200 "
            alt="Profile Picture of Lander Nunez"
          ></img>
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800 dark:text-neutral-50">
            Lander Nunez
          </h1>
          <p className="sm:text-sm md:text-lg lg:text-xl py-4 text-left font-normal text-gray-800 dark:text-neutral-50">
            Python | JavaScript/TypeScript | React | Node | Django | MongoDB | SQL
          </p>
          <h2 className="flex sm:text-2xl text-2xl pt-4 text-gray-800 dark:text-neutral-50">
            <TypeAnimation
              sequence={[
                "Software Engineer",
                2000,
                "Full-Stack Engineer",
                2000,
                "Front-End Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex gap-[20px] pt-6 max-w-[200px] w-full">
            <a
              href="https://www.linkedin.com/in/lndrnz/"
              target="_blank"
              className="cursor-pointer dark:text-neutral-50"
            >
              <FaLinkedinIn size={40} />
            </a>
            <a
              href="https://github.com/lndrnz"
              target="_blank"
              className="cursor-pointer dark:text-neutral-50"
            >
              <FaGithub size={40} />
            </a>
            {/* <a
              href={LanderNunezResume}
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-neutral-50"
            >
              <FaRegFileAlt size={40} />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
