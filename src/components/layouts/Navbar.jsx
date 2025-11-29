import { useState, useContext } from "react";
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Button,
	Stack,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Box,
	useTheme,
	useMediaQuery,
	alpha,
} from "@mui/material";
import {
	Menu as MenuIcon,
	Close,
} from "@mui/icons-material";
import { ColorModeContext } from "../../theme/ColorModeContext";
import { SECTION_IDS } from "../../core/constants";
import useScrollSpy from "../../core/hooks/useScrollSpy";

const LINKS = [
	{ id: SECTION_IDS.ABOUT, label: "About" },
	{ id: SECTION_IDS.PROJECTS, label: "Projects" },
	{ id: SECTION_IDS.EXPERIENCE, label: "Experience" },
	{ id: SECTION_IDS.CONTACT, label: "Contact" },
];

export default function Navbar() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	const [mobileOpen, setMobileOpen] = useState(false);

	const active = useScrollSpy(
		[SECTION_IDS.HOME, ...LINKS.map((x) => x.id)],
		120
	);

	const setHash = (id) => {
		window.location.hash = id;
		setMobileOpen(false);
	};

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<>
			<AppBar
				position="sticky"
				color="default"
				elevation={0}
				sx={{
					borderBottom: "1px solid",
					borderColor: "divider",
					backdropFilter: "blur(20px)",
					backgroundColor: (theme) =>
						theme.palette.mode === "light"
							? alpha(theme.palette.background.paper, 0.8)
							: alpha(theme.palette.background.paper, 0.9),
				}}
			>
				<Toolbar sx={{ justifyContent: "space-between", minHeight: 64 }}>
					{/* Logo/Brand */}
					<Typography
						variant="h6"
						sx={{
							cursor: "pointer",
							fontWeight: 700,
							background:
								"linear-gradient(45deg, #0984E3 30%, #00B894 90%)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							transition: "all 0.2s ease",
							"&:hover": {
								transform: "scale(1.05)",
							},
						}}
						onClick={() => setHash(SECTION_IDS.HOME)}
					>
						Sundram Gupta
					</Typography>

					{/* Desktop Navigation */}
					{!isMobile && (
						<Stack direction="row" spacing={0.5} alignItems="center">
							{LINKS.map((link) => (
								<Button
									key={link.id}
									size="medium"
									variant="text"
									onClick={() => setHash(link.id)}
									sx={{
										color:
											active === link.id
												? "primary.main"
												: "text.primary",
										fontWeight: active === link.id ? 600 : 500,
										position: "relative",
										"&::after": {
											content: '""',
											position: "absolute",
											bottom: 8,
											left: "50%",
											transform: "translateX(-50%)",
											width: active === link.id ? "60%" : "0%",
											height: 2,
											bgcolor: "primary.main",
											borderRadius: 1,
											transition: "width 0.3s ease",
										},
										"&:hover::after": {
											width: "60%",
										},
									}}
								>
									{link.label}
								</Button>
						))}
						</Stack>
					)}

					{/* Mobile Menu Button */}
					{isMobile && (
						<Stack direction="row" spacing={1} alignItems="center">
							<IconButton
								aria-label="Toggle dark mode"
								onClick={toggle}
								size="medium"
							>
								{mode === "light" ? (
									<DarkMode fontSize="small" />
								) : (
									<LightMode fontSize="small" />
								)}
							</IconButton>
							<IconButton
								aria-label="Open menu"
								onClick={handleDrawerToggle}
								size="medium"
							>
								<MenuIcon />
							</IconButton>
						</Stack>
					)}
				</Toolbar>
			</AppBar>

			{/* Mobile Drawer */}
			<Drawer
				anchor="right"
				open={mobileOpen}
				onClose={handleDrawerToggle}
				sx={{
					"& .MuiDrawer-paper": {
						width: 280,
						background: (theme) =>
							theme.palette.mode === "light"
								? "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)"
								: "linear-gradient(135deg, #1a1d23 0%, #121621 100%)",
					},
				}}
			>
				<Box sx={{ p: 2 }}>
					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="center"
						sx={{ mb: 2 }}
					>
						<Typography variant="h6" fontWeight={700}>
							Menu
						</Typography>
						<IconButton onClick={handleDrawerToggle} size="small">
							<Close />
						</IconButton>
					</Stack>

					<List>
						{LINKS.map((link) => (
							<ListItem key={link.id} disablePadding>
								<ListItemButton
									onClick={() => setHash(link.id)}
									selected={active === link.id}
									sx={{
										borderRadius: 2,
										mb: 0.5,
										"&.Mui-selected": {
											bgcolor: (theme) =>
												alpha(theme.palette.primary.main, 0.1),
											color: "primary.main",
											fontWeight: 600,
											"&:hover": {
												bgcolor: (theme) =>
													alpha(theme.palette.primary.main, 0.15),
											},
										},
									}}
								>
									<ListItemText
										primary={link.label}
										primaryTypographyProps={{
											fontWeight: active === link.id ? 600 : 500,
										}}
									/>
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Box>
			</Drawer>
		</>
	);
}
