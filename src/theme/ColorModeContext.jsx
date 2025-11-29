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
		// Always use light mode
		return "light";
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
