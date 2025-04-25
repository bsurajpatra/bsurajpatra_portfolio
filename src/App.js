import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import useLocalStorage from 'use-local-storage'
import SkillsAndTechnology from './components/skillandtechnology/SkillsAndTechnology';
import Certifications from './components/certifications/Certifications';
import CodingProfiles from './components/codingprofiles/CodingProfiles';
import Footer from './components/footer/Footer';

function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    return (
        <div className="app" data-theme={theme}>
            <Sidebar theme={theme} switchTheme={switchTheme} />
            <main className='main'>
                <Home />
                <About />
                <Experience />
                <Education />
                <SkillsAndTechnology />   
                <Projects />
                <Certifications />
                <CodingProfiles />
                <Contact theme={theme} />
                <Footer />
            </main>
        </div>
    );
}

export default App;
