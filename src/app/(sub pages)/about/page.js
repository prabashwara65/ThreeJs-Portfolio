import Image from "next/image";
import bg from "../../../../public/background/about-background.png"
import RenderModel from "../../Components/RenderModel";
import Wizard from "../../Components/models/Wizard";
import Navigation from "../../Components/navigation";
import AboutDetails from "@/app/Components/about";

// import Macbook from "./Components/models/Macbook";

export default function Home() {
    return (
        <>
            <Image src={bg} alt="background-image" fill className="w-full h-full object-cover object-center opacity-25" />



            <div className="w-full h-screen absolute top-1/2 -translate-y-1/2 left-0">

                <Navigation />
                
                {/* <RenderModel>
                <Staff />
                </RenderModel> */}
            </div>


            <div className="relative w-full h-screen flex flex-col items-center justify-center">
                <div className="absolute flex flex-col items-center text-center top-[60%] left-1/2 -translate-x-1/2">
                    <h1 className="font-bold text-9xl text-accent">Prabashwara</h1>
                    <p className="font-light text-foreground text-ls">Meet the wizard behind this portfolio</p>
                </div>
            </div>

            <AboutDetails />
        </>
    );
}
