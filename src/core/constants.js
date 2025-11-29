// Animation variants for Framer Motion
export const fadeInUp = {
	initial: {
		y: 30,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
};

export const staggerContainer = {
	animate: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};

export const scaleIn = {
	initial: {
		scale: 0.9,
		opacity: 0,
	},
	animate: {
		scale: 1,
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
};

// Common styles
export const sectionStyles = {
	padding: { xs: "60px 0", md: "100px 0" },
	position: "relative",
	overflow: "hidden",
};

export const containerStyles = {
	maxWidth: "1200px",
	margin: "0 auto",
	padding: { xs: "0 20px", sm: "0 40px" },
};

// Gradient overlays
export const gradients = {
	primary:
		"linear-gradient(135deg, rgba(9,132,227,0.1) 0%, rgba(0,184,148,0.1) 100%)",
	secondary:
		"linear-gradient(135deg, rgba(45,52,54,0.05) 0%, rgba(99,110,114,0.05) 100%)",
};

// Shadow styles
export const shadows = {
	card: "0 4px 20px rgba(0,0,0,0.05)",
	cardHover: "0 8px 30px rgba(0,0,0,0.12)",
	button: "0 2px 10px rgba(0,0,0,0.1)",
	buttonHover: "0 5px 15px rgba(0,0,0,0.1)",
};

// Common transitions
export const transitions = {
	default: "all 0.3s ease-in-out",
	fast: "all 0.2s ease-in-out",
	slow: "all 0.4s ease-in-out",
};

// Section IDs for navigation
export const SECTION_IDS = {
	HOME: "home",
	ABOUT: "about",
	PROJECTS: "projects",
	EXPERIENCE: "experience",
	SKILLS: "skills",
	CONTACT: "contact",
};
