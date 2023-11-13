import LanderNunezResume from "./../assets/LanderNunezResume.pdf";

const AboutMe = () => {
  return (
    <div id="aboutme" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]  dark:text-white">
        About Me
      </h1>
      <p className="text-left py-4 text-base font-normal text-stone-500 dark:text-white">
        Hey there! 👋🏾 I'm a Software Engineer with a deep passion for solving
        complex problems, learning new technologies, and sharing the knowledge
        that I've gained.
        </p>
        <p className="text-left py-4 text-base font-normal text-stone-500 dark:text-white"> I enjoy transforming abstract ideas into tangible,
        real-world creations. I also have a knack for delving deep into
        debugging and building scalable applications while focusing on creating
        user-friendly interfaces. Before transitioning into the tech industry, I
        worked in healthcare, where I developed a strong passion for
        programming. </p>
        <p className="text-left py-4 text-base font-normal text-stone-500 dark:text-white">
        Currently, I'm actively seeking a Full-Time opportunity as
        a Software Developer and would love the chance to contribute my skills
        to your team.
      </p>
      <p className="text-left py-4 text-base font-normal text-stone-500 dark:text-white">Here's a <a className="text-[#001b5e] underline dark:text-white" href={LanderNunezResume} target="_blank" rel="noopener noreferrer">link</a> to my resume!</p>
    </div>
  );
};
export default AboutMe;
