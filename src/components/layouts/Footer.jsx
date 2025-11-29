import {
	Box,
	Container,
	Stack,
	Typography,
	Link,
	IconButton,
	Divider,
	alpha,
} from "@mui/material";
import { GitHub, LinkedIn, Favorite } from "@mui/icons-material";
import { SECTION_IDS } from "../../core/constants";
import { profile } from "../../content/profile";

export default function Footer() {
	const setHash = (id) => {
		window.location.hash = id;
	};

	const currentYear = new Date().getFullYear();

	return (
		<Box
			component="footer"
			sx={{
				py: 6,
				borderTop: "1px solid",
				borderColor: "divider",
				background: (theme) =>
					theme.palette.mode === "light"
						? "linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)"
						: "linear-gradient(180deg, #1a1d23 0%, #0f1419 100%)",
			}}
		>
			<Container maxWidth="lg">
				<Stack spacing={4}>
					{/* Top Section */}
					<Stack
						direction={{ xs: "column", md: "row" }}
						justifyContent="space-between"
						alignItems={{ xs: "flex-start", md: "center" }}
						spacing={3}
					>
						{/* Brand */}
						<Box>
							<Typography
								variant="h6"
								sx={{
									fontWeight: 700,
									background:
										"linear-gradient(45deg, #0984E3 30%, #00B894 90%)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									mb: 1,
								}}
							>
								Sundram Gupta
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Frontend Developer | Building Digital Experiences
							</Typography>
						</Box>

						{/* Quick Links */}
						<Stack direction="row" spacing={3}>
							<Link
								href={`#${SECTION_IDS.HOME}`}
								onClick={(e) => {
									e.preventDefault();
									setHash(SECTION_IDS.HOME);
								}}
								sx={{
									cursor: "pointer",
									color: "text.secondary",
									fontWeight: 500,
									transition: "all 0.2s ease",
									"&:hover": {
										color: "primary.main",
										transform: "translateY(-2px)",
									},
								}}
							>
								Home
							</Link>
							<Link
								href={`#${SECTION_IDS.ABOUT}`}
								onClick={(e) => {
									e.preventDefault();
									setHash(SECTION_IDS.ABOUT);
								}}
								sx={{
									cursor: "pointer",
									color: "text.secondary",
									fontWeight: 500,
									transition: "all 0.2s ease",
									"&:hover": {
										color: "primary.main",
										transform: "translateY(-2px)",
									},
								}}
							>
								About
							</Link>
							<Link
								href={`#${SECTION_IDS.PROJECTS}`}
								onClick={(e) => {
									e.preventDefault();
									setHash(SECTION_IDS.PROJECTS);
								}}
								sx={{
									cursor: "pointer",
									color: "text.secondary",
									fontWeight: 500,
									transition: "all 0.2s ease",
									"&:hover": {
										color: "primary.main",
										transform: "translateY(-2px)",
									},
								}}
							>
								Projects
							</Link>
							<Link
								href={`#${SECTION_IDS.CONTACT}`}
								onClick={(e) => {
									e.preventDefault();
									setHash(SECTION_IDS.CONTACT);
								}}
								sx={{
									cursor: "pointer",
									color: "text.secondary",
									fontWeight: 500,
									transition: "all 0.2s ease",
									"&:hover": {
										color: "primary.main",
										transform: "translateY(-2px)",
									},
								}}
							>
								Contact
							</Link>
						</Stack>

						{/* Social Links */}
						<Stack direction="row" spacing={1}>
							<IconButton
								href={profile.links.github}
								target="_blank"
								rel="noopener noreferrer"
								size="small"
								sx={{
									color: "text.secondary",
									transition: "all 0.2s ease",
									"&:hover": {
										color: "primary.main",
										transform: "translateY(-2px)",
									},
								}}
							>
								<GitHub />
							</IconButton>
							<IconButton
								href={profile.links.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								size="small"
								sx={{
									color: "text.secondary",
									transition: "all 0.2s ease",
									"&:hover": {
										color: "primary.main",
										transform: "translateY(-2px)",
									},
								}}
							>
								<LinkedIn />
							</IconButton>
						</Stack>
					</Stack>

					<Divider />

					{/* Bottom Section */}
					<Stack
						direction={{ xs: "column", sm: "row" }}
						justifyContent="space-between"
						alignItems="center"
						spacing={2}
					>
						<Typography variant="body2" color="text.secondary">
							© {currentYear} {profile.name}. All rights reserved.
						</Typography>

						<Stack
							direction="row"
							alignItems="center"
							spacing={0.5}
							sx={{ color: "text.secondary" }}
						>
							<Typography variant="body2">Built with</Typography>
							<Favorite
								sx={{
									fontSize: 16,
									color: "#E84393",
									animation: "heartbeat 1.5s ease-in-out infinite",
									"@keyframes heartbeat": {
										"0%, 100%": { transform: "scale(1)" },
										"50%": { transform: "scale(1.2)" },
									},
								}}
							/>
							<Typography variant="body2">using React & MUI</Typography>
						</Stack>
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
}
