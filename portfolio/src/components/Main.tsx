import { TypeAnimation } from "react-type-animation";
import {FaLinkedinIn } from "react-icons/fa"
const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left"
        src="https://images.pexels.com/photos/2157685/pexels-photo-2157685.jpeg"
      ></img>
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
      <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
        <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">I'm Lander Nuñez</h1>
        <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">I'm a
        <TypeAnimation
      sequence={[

        'Software Engineer',
        2000,
        'Full Stack Developer',
        2000,
        'Designer',
        2000,
        'Problem Solver',
        2000,
        'Photographer',
        1000,
        'Marathon Runner',
        1000
    
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', paddingLeft: '5px' }}
      repeat={Infinity}
    />
    </h2>
    <div className="flex justify between pt-6 max-w-[200px] w-full">
        <FaLinkedinIn className="cursor-pointer"size={20} />
    </div>
      </div>
      </div>
    </div>
  );
};
export default Main;
