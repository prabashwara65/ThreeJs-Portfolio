import Image from "next/image";
import bg from "../../../public/background/projects-background.png"
import ProjectList from "../Components/projects";
import { projectsData } from "../data";
import RenderModel from "../Components/RenderModel";
import Wizard from "../Components/models/Wizard";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt="background-image" fill className="w-full h-full object-cover object-center opacity-25" />

      
    <ProjectList projects={projectsData} />

    <RenderModel>
      <Wizard />
    </RenderModel>
    </main>
  );
}
