import { ThemeProvider, useTheme } from "./ThemeContext";
function Child() {
	const { theme, toggleTheme } = useTheme();
	return (
		<div
			style={{
				padding: 20,
				borderRadius: 10,
				background: theme === "light" ? "#f0f0f0" : "#111",
				color: theme === "light" ? "#111" : "#f0f0f0",
			}}
		>
			<h3>Current theme : {theme}</h3>
			<button onClick={toggleTheme}>Toggle Theme</button>
		</div>
	);
}

export default Child;
