import "./Home.scss";
import Navbar from "../../Components/Navbar/Navbar";
import IntroText from "../../Components/IntroText/IntroText";
import VerticalList from "../../Components/VerticalList/VerticalList";
import SkillsSection from "../../Components/SkillsSection/SkillsSection";
import SideNav from "../../Components/SideNav/SideNav";
import Projects from "../../Components/Projects/Projects";
import FrontImage from "../../Components/FrontImage/FrontImage";
import ScrollNav from "../../Components/ScrollNav/ScrollNav";

function Home() {
  return (
    <div className="App">
      <Navbar />
      <ScrollNav />
      {/* <SideNav /> */}
      <div className="flex-container">
        <IntroText />
        <VerticalList />
        <FrontImage />
      </div>
      <SkillsSection />
      <Projects />
    </div>
  );
}

export default Home;
