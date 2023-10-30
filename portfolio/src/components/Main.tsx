import { TypeAnimation } from "react-type-animation";
import profile from "./../assets/profile.jpeg";
import Background from "./../assets/Background.jpeg";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left"
        src={Background}
      ></img>
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <img src={profile} width={150} height={150}className="rounded-full "alt="Profile Picture of Lander Nunez"></img>
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            Lander Nuñez
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            <TypeAnimation
              sequence={[
                "Software Engineer",
                2000,
                "Full-Stack Developer",
                2000,
                "Designer",
                2000,
                "Problem Solver",
                2000,
                "Tech Enthusiast",
                1000,
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
              className="cursor-pointer"
            >
              <FaLinkedinIn size={40} />
            </a>
            <a href="https://github.com/lndrnz"
            target="_blank"
            className="cursor-pointer"
            >
            <FaGithub size={40} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
