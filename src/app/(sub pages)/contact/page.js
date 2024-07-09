import Image from "next/image";
import bg from "../../../../public/background/home-background.png"
import Navigation from "../../Components/navigation";
import Form from "@/app/Components/contact/Form";
import HomeBtn from "@/app/Components/HomeBtn";


// import Macbook from "./Components/models/Macbook";

export default function Home() {
    return (
        <>
            <Image
                src={bg}
                alt="background-image"
                fill className="w-full h-full object-cover object-center opacity-25" />

            <div className="flex items-center justify-center fixed top-0 left-10 h-screen ">

                {/* <Navigation /> */}
                <HomeBtn />

                {/* <RenderModel>
                    <Staff />
                </RenderModel> */}
            </div>

            <article className="relative w-full flex flex-col items-center justify-center space-y-8">

                <div className="flex flex-col items-center justify-center space-y-6 w-3/4">
                <h1 className="text-accent font-semibold text-center text-4xl capitalize">
                        Contact Me
                </h1>
                <p className="text-center font-light">
                If you have any questions or would like to discuss potential opportunities, 
                please feel free to reach out to me. I&apos;m always open to connecting and exploring new possibilities


                </p>

                </div>
                    <Form className='z-50'/>
            </article>

        </>
    );
}
