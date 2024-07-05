import Image from "next/image";
import bg from "../../public/background/home-background.png"
import RenderModel from "./Components/RenderModel";

import Navigation from "./Components/navigation";

import Anotherlap from "./Components/models/Anotherlap";
import MacBook from "./Components/models/Macbook";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt="background-image" fill className="w-full h-full object-cover object-center opacity-25" />

      <div className="w-full h-screen">
        {/* rendering nav component and 3d component */}

        <Navigation />
        <RenderModel>

          <Anotherlap />
          {/* <MacBook /> */}

        </RenderModel>
        
        
      </div>

    </main>
  );
}
