import { lightTheme, darkTheme } from "./theme";

export const createTheme = (mode = "light") => {
	return mode === "light" ? lightTheme : darkTheme;
};
