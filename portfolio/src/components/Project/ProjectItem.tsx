import { ProjectItemProps } from "../../types/types";

const ProjectItem:React.FC<ProjectItemProps> = ({ img, title, link}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center"><a href={link} target="_blank">
          {title}
          </a>
        </h3>
      </div>
    </div>
  );
};

export default ProjectItem;
