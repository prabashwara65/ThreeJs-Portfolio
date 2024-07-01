import Image from "next/image";
import bg from "../../../../public/background/contact-background.png"


// import Macbook from "./Components/models/Macbook";

export default function Home() {
    return (
        <>
            <Image 
            src={bg} 
            alt="background-image" 
            fill className="w-full h-full object-cover object-center opacity-25" />

        </>
    );
}
