import Image from "next/image";
import bg from "../../../../public/background/contact-background.png"
import Navigation from "../../Components/navigation";


// import Macbook from "./Components/models/Macbook";

export default function Home() {
    return (
        <>
            <Image
                src={bg}
                alt="background-image"
                fill className="w-full h-full object-cover object-center opacity-25" />

            <div className="flex items-center justify-center fixed top-0 left-10 h-screen z-10">

                <Navigation />

                {/* <RenderModel>
                    <Staff />
                </RenderModel> */}
            </div>

            <article className="relative w-full flex flex-col items-center justify-center space-y-8">

                <div className="flex flex-col items-center justify-center space-y-6 w-3/4">
                <h1 className="text-accent font-semibold text-center text-4xl capitalize">
                        Summon the wizard
                </h1>
                <p className="text-center font-light">
                    lorem jasdkasfaif njefjsefkjs ke sfjefnskms efeahfke fs efaeifaefa ryaea raihfae fakenfoiaef aefa efka
                    lorem jasdkasfaif njefjsefkjs ke sfjefnskms efeahfke fs efaeifaefa ryaea raihfae fakenfoiaef aefa efka
                </p>

                </div>

            </article>

        </>
    );
}
