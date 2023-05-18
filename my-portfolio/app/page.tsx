import About from "@/app/about/page";
import Projects from "@/app/projects/page";
import styles from './home.module.css';
const Home = () => {
    return (
        <div className={styles.content}>
            <main>
                This is the main
                <About />
                <Projects />
            </main>
        </div>
    )
}

export default Home;
