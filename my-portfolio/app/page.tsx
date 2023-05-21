import About from "@/app/about/page";
import Projects from "@/app/projects/page";
import styles from './home.module.css';
const Home = () => {
    return (
        <main>
            <div className={styles.content}>hi</div>
            <About />
            <Projects />
        </main>
    )
}

export default Home;
