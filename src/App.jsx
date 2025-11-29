import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

export default function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<Projects />
			<Experience />
			<Contact />
			<Footer />
			
		</>
	);
}
