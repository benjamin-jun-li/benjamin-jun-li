import NavHead from '../components/nav-head';
import About from "@/app/about/page";
import Projects from "@/app/projects/page";
const Home = () => {
    return (
        <>
            <main>
                <NavHead />
                This is the main
                <About />
                <Projects />
            </main>
        </>
    )
}

export default Home;
