import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import UseEffectPractice from "./components/practice/UseEffectPractice";
import Counter from "./components/practice/Counter";
import UseRefPractice from "./components/practice/UseRefPractice";
import Stopwatch from "./components/practice/Stopwatch";
import UseMemoPractice from "./components/practice/UseMemoPractice";
import UseCallbackPractice from "./components/practice/UseCallbackPractice";
import { ThemeProvider } from "./components/practice/Context.jsx/ThemeContext";
import Child from "./components/practice/Context.jsx/Child";
import UserCardWithLoading from "./components/practice/HOC/UserCard";
import HOCDemo from "./components/practice/HOC/HOCDemo";
import RenderPropsDemo from "./components/practice/RenderProps/RenderPropsDemo";

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
			
			{/* Practice Components - Below Footer */}
			<UseEffectPractice />
			<Counter />
			<UseRefPractice />
			<Stopwatch />
			<UseMemoPractice />
			<UseCallbackPractice />
			<ThemeProvider>
				<h2>Context api practice</h2>
				<Child />
			</ThemeProvider>
			<HOCDemo />
			<RenderPropsDemo />
		</>
	);
}
