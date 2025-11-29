import { createContext, useMemo, useState, useEffect } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "./createTheme";

const PERSIST_THEME = true; // set false to avoid localStorage entirely

export const ColorModeContext = createContext({
	toggle: () => {},
	mode: "light",
});

export default function ColorModeProvider({ children }) {
	const getInitialMode = () => {
		try {
			if (PERSIST_THEME) {
				const stored = localStorage.getItem("mode");
				if (stored === "light" || stored === "dark") return stored;
			}
		} catch {
			// Ignore errors reading localStorage
		}
		return window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";
	};

	const [mode, setMode] = useState(getInitialMode);

	useEffect(() => {
		if (!PERSIST_THEME) return;
		try {
			localStorage.setItem("mode", mode);
		} catch {
			// Ignore errors writing to localStorage
		}
	}, [mode]);

	const value = useMemo(
		() => ({
			mode,
			toggle: () => setMode((m) => (m === "light" ? "dark" : "light")),
		}),
		[mode]
	);

	const theme = useMemo(() => createTheme(mode), [mode]);

	return (
		<ColorModeContext.Provider value={value}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}
