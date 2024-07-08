import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "../../Components/projects";
import { projectsData } from "../../data";
import RenderModel from "../../Components/RenderModel";
import Wizard from "../../Components/models/Wizard";
import Staff from "../../Components/models/Staff";
import Navigation from "../../Components/navigation";
import HomeBtn from "@/app/Components/HomeBtn";

export default function Home() {
  return (
    <>
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <Image
          src={bg}
          alt="background-image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-25"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <ProjectList projects={projectsData} />

        {/* Additional Components */}
        <div className="flex items-center justify-center fixed top-0 left-10 h-screen z-10">
          {/* <Navigation /> */}
          <HomeBtn />
          {/* <RenderModel>
            <Staff />
          </RenderModel> */}
        </div>
      </div>
    </>
  );
}
