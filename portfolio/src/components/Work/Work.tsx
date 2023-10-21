import WorkItem from "./WorkItem";
// import { data } from "../../types/types";

const data: any = [
  {
    year: 2023,
    company: "Digital TownSq",
    title: "Full Stack Engineer Intern",
    duration: "June - October 2023",
      details: "News app showcasing real-time US headlines, optimized for user discussion and interaction."
    
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item:any, idx:any) => (
        <WorkItem
          key={idx}
          year={item.year}
          company={item.company}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
