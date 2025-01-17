import LanderNunezResume from "./../assets/LanderNunezResume.pdf";

const AboutMe = () => {
  return (
    <div id="aboutme" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]  dark:text-white">
        About Me
      </h1>
      <p className="text-left py-4 text-base font-normal text-stone-500 dark:text-white">
        Hey there, 👋🏾 I'm a Software Engineer with a healthcare background, passionate about architecture, design, and optimization. Interests include Fintech and Full Stack Development.
        </p>
        <p className="text-left py-4 text-base font-normal text-stone-500 dark:text-white"> Currently a Software Engineer at Gainwell Technologies.</p>
        {/* <p className="text-left py-4 text-base font-normal text-stone-500 dark:text-white">
        Currently, I'm actively seeking a Full-Time opportunity as
        a Software Developer and would love the chance to contribute my skills
        to your team.
      </p> */}
      <p className="text-left py-4 text-base font-normal text-stone-500 dark:text-white">Here's a <a className="text-[#001b5e] underline dark:text-cyan-500" href={LanderNunezResume} target="_blank" rel="noopener noreferrer">link</a> to my resume.</p>
    </div>
  );
};
export default AboutMe;
