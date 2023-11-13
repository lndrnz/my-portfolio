import SideNav from "./components/SideNav";
import Main from "./components/Main";
import AboutMe from "./components/AboutMe";
// import Work from "./components/Work/Work";
import Projects from "./components/Project/Projects";
import Contact from "./components/Contact/Contact";
import LightSwitch from "./components/LightSwitch";

function App() {
  return (
    <div className="dark:bg-neutral-950">
      <LightSwitch />
      <SideNav />
      <Main />
      <AboutMe />
      {/* <Work /> */}
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
