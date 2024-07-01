import Image from "next/image";
import bg from "../../../../public/background/projects-background.png"
import ProjectList from "../../Components/projects";
import { projectsData } from "../../data";
import RenderModel from "../../Components/RenderModel";
import Wizard from "../../Components/models/Wizard";
import Staff from "../../Components/models/Staff";
import Navigation from "../../Components/navigation";


export default function Home() {
  return (
    <>
      <Image src={bg} alt="background-image" fill className="w-full h-full object-cover object-center opacity-25" />


      <ProjectList projects={projectsData} />

      <div className="flex items-center justify-center fixed top-20 left-20 h-screen">
        
        <Navigation />
        {/* <RenderModel>
          <Staff />
        </RenderModel> */}
      </div>
    </>
  );
}
