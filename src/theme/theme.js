import { createTheme } from "@mui/material/styles";

// Modern, vibrant color palette for professional frontend developer portfolio
const colors = {
	primary: {
		main: "#0984E3", // Vibrant blue
		light: "#74B9FF", // Light blue
		dark: "#0652DD", // Dark blue
		contrastText: "#fff",
	},
	secondary: {
		main: "#00B894", // Teal/Mint
		light: "#55EFC4", // Light mint
		dark: "#00A896", // Dark teal
		contrastText: "#fff",
	},
	accent: {
		main: "#6C5CE7", // Purple
		light: "#A29BFE", // Light purple
		dark: "#5F3DC4", // Dark purple
		contrastText: "#fff",
	},
	coral: {
		main: "#FD79A8", // Coral pink
		light: "#FDCFE8",
		dark: "#E84393",
		contrastText: "#fff",
	},
	background: {
		default: "#FFFFFF",
		paper: "#F8F9FA",
		dark: "#1A1D23",
	},
	text: {
		primary: "#2D3436",
		secondary: "#636E72",
		disabled: "#B2BEC3",
	},
	divider: "rgba(0, 0, 0, 0.08)",
};

// Dark mode colors
const darkColors = {
	primary: {
		main: "#74B9FF", // Lighter blue for dark mode
		light: "#A4D4FF",
		dark: "#0984E3",
		contrastText: "#000",
	},
	secondary: {
		main: "#55EFC4", // Lighter teal for dark mode
		light: "#81EFDD",
		dark: "#00B894",
		contrastText: "#000",
	},
	accent: {
		main: "#A29BFE", // Lighter purple for dark mode
		light: "#C7C2FF",
		dark: "#6C5CE7",
		contrastText: "#000",
	},
	coral: {
		main: "#FD79A8",
		light: "#FDCFE8",
		dark: "#E84393",
		contrastText: "#000",
	},
	background: {
		default: "#0F1419",
		paper: "#1A1D23",
		dark: "#000000",
	},
	text: {
		primary: "#E8EAED",
		secondary: "#B2BEC3",
		disabled: "#636E72",
	},
	divider: "rgba(255, 255, 255, 0.12)",
};

// Typography configuration with Google Fonts
const typography = {
	fontFamily:
		"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
	h1: {
		fontFamily: "'Poppins', 'Inter', sans-serif",
		fontWeight: 700,
		fontSize: "3.75rem",
		lineHeight: 1.15,
		letterSpacing: "-0.02em",
		"@media (max-width:900px)": {
			fontSize: "3rem",
		},
		"@media (max-width:600px)": {
			fontSize: "2.25rem",
		},
	},
	h2: {
		fontFamily: "'Poppins', 'Inter', sans-serif",
		fontWeight: 700,
		fontSize: "3rem",
		lineHeight: 1.2,
		letterSpacing: "-0.015em",
		"@media (max-width:900px)": {
			fontSize: "2.5rem",
		},
		"@media (max-width:600px)": {
			fontSize: "2rem",
		},
	},
	h3: {
		fontFamily: "'Poppins', 'Inter', sans-serif",
		fontWeight: 600,
		fontSize: "2.25rem",
		lineHeight: 1.3,
		letterSpacing: "-0.01em",
		"@media (max-width:600px)": {
			fontSize: "1.75rem",
		},
	},
	h4: {
		fontFamily: "'Poppins', 'Inter', sans-serif",
		fontWeight: 600,
		fontSize: "1.875rem",
		lineHeight: 1.35,
		letterSpacing: "0em",
		"@media (max-width:600px)": {
			fontSize: "1.5rem",
		},
	},
	h5: {
		fontFamily: "'Poppins', 'Inter', sans-serif",
		fontWeight: 600,
		fontSize: "1.5rem",
		lineHeight: 1.4,
		letterSpacing: "0em",
		"@media (max-width:600px)": {
			fontSize: "1.25rem",
		},
	},
	h6: {
		fontFamily: "'Poppins', 'Inter', sans-serif",
		fontWeight: 600,
		fontSize: "1.25rem",
		lineHeight: 1.4,
		letterSpacing: "0.0075em",
	},
	subtitle1: {
		fontSize: "1.125rem",
		lineHeight: 1.75,
		letterSpacing: "0.00938em",
		fontWeight: 500,
	},
	subtitle2: {
		fontWeight: 500,
		fontSize: "1rem",
		lineHeight: 1.57,
		letterSpacing: "0.00714em",
	},
	body1: {
		fontSize: "1rem",
		lineHeight: 1.75,
		letterSpacing: "0.00938em",
	},
	body2: {
		fontSize: "0.875rem",
		lineHeight: 1.6,
		letterSpacing: "0.01071em",
	},
	button: {
		fontWeight: 600,
		fontSize: "0.9375rem",
		lineHeight: 1.75,
		letterSpacing: "0.02857em",
		textTransform: "none",
	},
	caption: {
		fontSize: "0.75rem",
		lineHeight: 1.66,
		letterSpacing: "0.03333em",
	},
	overline: {
		fontSize: "0.75rem",
		fontWeight: 700,
		lineHeight: 2.66,
		letterSpacing: "0.08333em",
		textTransform: "uppercase",
	},
};

// Custom shape configuration
const shape = {
	borderRadius: 12,
};

// Spacing configuration
const spacing = 8;

// Custom shadows
const shadows = [
	"none",
	"0 2px 4px rgba(0,0,0,0.05)",
	"0 4px 8px rgba(0,0,0,0.08)",
	"0 8px 16px rgba(0,0,0,0.1)",
	"0 12px 24px rgba(0,0,0,0.12)",
	"0 16px 32px rgba(0,0,0,0.14)",
	"0 20px 40px rgba(0,0,0,0.16)",
	"0 24px 48px rgba(0,0,0,0.18)",
	"0 28px 56px rgba(0,0,0,0.2)",
	"0 32px 64px rgba(0,0,0,0.22)",
	"0 36px 72px rgba(0,0,0,0.24)",
	...Array(14).fill("0 2px 4px rgba(0,0,0,0.05)"),
];

// Components override
const components = {
	MuiButton: {
		styleOverrides: {
			root: {
				borderRadius: 10,
				padding: "11px 28px",
				fontSize: "0.9375rem",
				fontWeight: 600,
				transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
				"&:hover": {
					transform: "translateY(-2px)",
				},
			},
			contained: {
				boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
				"&:hover": {
					boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
				},
			},
			outlined: {
				borderWidth: "2px",
				"&:hover": {
					borderWidth: "2px",
				},
			},
			sizeLarge: {
				padding: "14px 36px",
				fontSize: "1rem",
			},
			sizeSmall: {
				padding: "8px 20px",
				fontSize: "0.875rem",
			},
		},
	},
	MuiCard: {
		styleOverrides: {
			root: {
				borderRadius: 16,
				boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
				transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
			},
		},
	},
	MuiPaper: {
		styleOverrides: {
			root: {
				borderRadius: 16,
			},
			elevation1: {
				boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
			},
			elevation2: {
				boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
			},
			elevation3: {
				boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
			},
		},
	},
	MuiChip: {
		styleOverrides: {
			root: {
				borderRadius: 8,
				fontWeight: 500,
				transition: "all 0.2s ease-in-out",
				"&:hover": {
					transform: "translateY(-2px)",
				},
			},
		},
	},
	MuiIconButton: {
		styleOverrides: {
			root: {
				transition: "all 0.2s ease-in-out",
				"&:hover": {
					transform: "scale(1.1)",
				},
			},
		},
	},
	MuiTextField: {
		styleOverrides: {
			root: {
				"& .MuiOutlinedInput-root": {
					borderRadius: 12,
					transition: "all 0.2s ease-in-out",
					"&:hover": {
						transform: "translateY(-1px)",
					},
					"&.Mui-focused": {
						transform: "translateY(-2px)",
					},
				},
			},
		},
	},
	MuiAppBar: {
		styleOverrides: {
			root: {
				backdropFilter: "blur(10px)",
				backgroundColor: "rgba(255, 255, 255, 0.8)",
			},
		},
	},
};

// Create light theme
export const lightTheme = createTheme({
	palette: {
		mode: "light",
		...colors,
	},
	typography,
	shape,
	spacing,
	shadows,
	components,
});

// Create dark theme
export const darkTheme = createTheme({
	palette: {
		mode: "dark",
		...darkColors,
	},
	typography,
	shape,
	spacing,
	shadows: shadows.map((shadow) =>
		shadow.replace(/rgba\(0,0,0/g, "rgba(0,0,0")
	),
	components: {
		...components,
		MuiAppBar: {
			styleOverrides: {
				root: {
					backdropFilter: "blur(10px)",
					backgroundColor: "rgba(26, 29, 35, 0.8)",
				},
			},
		},
	},
});

// Export default theme (light)
export default lightTheme;
