import Image from "next/image";
import loadingGif from "@/public/loading.gif";

const Projects = () => {
    return (
        <>
            <Image src={loadingGif} height={200} width={200} alt={"loading gif"}/>
            projects page
        </>
    )
}

export default Projects;