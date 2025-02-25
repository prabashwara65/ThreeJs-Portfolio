import Image from "next/image";
import bg from "../../../../public/background/about-background.png"
import RenderModel from "../../Components/RenderModel";
import Wizard from "../../Components/models/Wizard";
import Navigation from "../../Components/navigation";
import AboutDetails from "@/app/Components/about";
import HomeBtn from "@/app/Components/HomeBtn";

// import Macbook from "./Components/models/Macbook";

export default function Home() {
    return (
        <>
            <Image src={bg} alt="background-image" fill className="w-full h-full object-cover object-center opacity-25" />



            <div className="flex items-center justify-center fixed top-0 left-10 h-screen z-10">

                {/* <Navigation /> */}
                <HomeBtn />
                
                {/* <RenderModel>
                <Staff />
                </RenderModel> */}
            </div>


            <div className="relative w-full h-screen flex flex-col items-center justify-center">
                <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[50%] left-1/2 -translate-x-1/2">
                    <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent">Priyanka Prabashwara</h1>
                    <p className="font-light text-foreground text-ls">Full Stack Dev / Writer </p>
                </div>
            </div>

            <AboutDetails />
        </>
    );
}
