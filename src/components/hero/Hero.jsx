import {
	Box,
	Container,
	Grid,
	Typography,
	Button,
	Avatar,
	Stack,
	useTheme,
	alpha,
} from "@mui/material";
import { motion } from "framer-motion";
import { GitHub, LinkedIn, Description, ArrowForward } from "@mui/icons-material";
import { profile } from "../../content/profile";
import { SECTION_IDS, fadeInUp } from "../../core/constants";
import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {
	const theme = useTheme();

	return (
		<Box
			id={SECTION_IDS.HOME}
			component="section"
			sx={{
				position: "relative",
				minHeight: "100vh",
				display: "flex",
				alignItems: "center",
				overflow: "hidden",
				background:
					theme.palette.mode === "light"
						? "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)"
						: "linear-gradient(135deg, #1a1d23 0%, #2d3748 50%, #1a1d23 100%)",
				"&::before": {
					content: '""',
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					background:
						theme.palette.mode === "light"
							? "radial-gradient(circle at 20% 50%, rgba(9, 132, 227, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0, 184, 148, 0.1) 0%, transparent 50%)"
							: "radial-gradient(circle at 20% 50%, rgba(116, 185, 255, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(85, 239, 196, 0.05) 0%, transparent 50%)",
					zIndex: 0,
				},
			}}
		>
			<ParticlesBackground />
			<Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
				<Grid container spacing={6} alignItems="center">
					<Grid item xs={12} md={7}>
						<Stack spacing={4}>
							<motion.div
								initial="initial"
								animate="animate"
								variants={fadeInUp}
							>
								<Typography
									variant="overline"
									sx={{
										color: "primary.main",
										fontWeight: 700,
										letterSpacing: 3,
										fontSize: "0.875rem",
										display: "inline-block",
										px: 2,
										py: 0.5,
										borderRadius: 2,
										background: (theme) =>
											alpha(theme.palette.primary.main, 0.1),
									}}
								>
									{profile.role}
								</Typography>
							</motion.div>

							<motion.div
								initial="initial"
								animate="animate"
								variants={{
									...fadeInUp,
									animate: {
										...fadeInUp.animate,
										transition: { delay: 0.1, duration: 0.6 },
									},
								}}
							>
								<Typography
									variant="h1"
									sx={{
										fontWeight: 800,
										background:
											theme.palette.mode === "light"
												? "linear-gradient(45deg, #2D3436 30%, #0984E3 90%)"
												: "linear-gradient(45deg, #E8EAED 30%, #74B9FF 90%)",
										WebkitBackgroundClip: "text",
										WebkitTextFillColor: "transparent",
										lineHeight: 1.1,
									}}
								>
									{profile.name}
								</Typography>
							</motion.div>

							<motion.div
								initial="initial"
								animate="animate"
								variants={{
									...fadeInUp,
									animate: {
										...fadeInUp.animate,
										transition: { delay: 0.2, duration: 0.6 },
									},
								}}
							>
								<Typography
									variant="h4"
									sx={{
										color: "text.secondary",
										fontWeight: 400,
										lineHeight: 1.6,
										maxWidth: 600,
									}}
								>
									{profile.tagline}
								</Typography>
							</motion.div>

							<motion.div
								initial="initial"
								animate="animate"
								variants={{
									...fadeInUp,
									animate: {
										...fadeInUp.animate,
										transition: { delay: 0.3, duration: 0.6 },
									},
								}}
							>
								<Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
									<Button
										variant="contained"
										size="large"
										onClick={() =>
											document
												.getElementById(SECTION_IDS.PROJECTS)
												?.scrollIntoView({ behavior: "smooth" })
										}
										endIcon={<ArrowForward />}
										sx={{
											background:
												"linear-gradient(45deg, #0984E3 30%, #00B894 90%)",
											color: "white",
											fontWeight: 600,
											px: 4,
											py: 1.5,
											fontSize: "1rem",
											boxShadow: "0 8px 24px rgba(9, 132, 227, 0.3)",
											"&:hover": {
												background:
													"linear-gradient(45deg, #0984E3 50%, #00B894 110%)",
												boxShadow: "0 12px 32px rgba(9, 132, 227, 0.4)",
												transform: "translateY(-2px)",
											},
											transition: "all 0.3s ease",
										}}
									>
										View My Work
									</Button>
									<Button
										variant="outlined"
										size="large"
										href={profile.resumeUrl}
										target="_blank"
										rel="noopener noreferrer"
										startIcon={<Description />}
										sx={{
											borderWidth: 2,
											px: 4,
											py: 1.5,
											fontSize: "1rem",
											fontWeight: 600,
											"&:hover": {
												borderWidth: 2,
												transform: "translateY(-2px)",
												boxShadow: "0 8px 24px rgba(9, 132, 227, 0.2)",
											},
											transition: "all 0.3s ease",
										}}
									>
										Resume
									</Button>
								</Stack>
							</motion.div>

							<motion.div
								initial="initial"
								animate="animate"
								variants={{
									...fadeInUp,
									animate: {
										...fadeInUp.animate,
										transition: { delay: 0.4, duration: 0.6 },
									},
								}}
							>
								<Stack direction="row" spacing={1}>
									<Button
										variant="text"
										href={profile.links.github}
										target="_blank"
										rel="noopener noreferrer"
										startIcon={<GitHub />}
										sx={{
											color: "text.primary",
											fontWeight: 600,
											"&:hover": {
												color: "primary.main",
												transform: "translateY(-2px)",
											},
											transition: "all 0.2s ease",
										}}
									>
										GitHub
									</Button>
									<Button
										variant="text"
										href={profile.links.linkedin}
										target="_blank"
										rel="noopener noreferrer"
										startIcon={<LinkedIn />}
										sx={{
											color: "text.primary",
											fontWeight: 600,
											"&:hover": {
												color: "primary.main",
												transform: "translateY(-2px)",
											},
											transition: "all 0.2s ease",
										}}
									>
										LinkedIn
									</Button>
								</Stack>
							</motion.div>
						</Stack>
					</Grid>

					<Grid item xs={12} md={5}>
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.3 }}
						>
							<Box
								sx={{
									position: "relative",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								{/* Animated background blob */}
								<Box
									sx={{
										position: "absolute",
										width: { xs: 280, md: 380 },
										height: { xs: 280, md: 380 },
										background:
											"linear-gradient(45deg, #0984E3 30%, #00B894 90%)",
										borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
										opacity: 0.15,
										animation: "morph 8s ease-in-out infinite",
										"@keyframes morph": {
											"0%, 100%": {
												borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
												transform: "rotate(0deg)",
											},
											"50%": {
												borderRadius: "70% 30% 30% 70% / 70% 70% 30% 30%",
												transform: "rotate(180deg)",
											},
										},
									}}
								/>

								{/* Avatar */}
								<Avatar
									src="/avatar.jpg"
									alt={`${profile.name} headshot`}
									sx={{
										width: { xs: 240, md: 320 },
										height: { xs: 240, md: 320 },
										border: "6px solid",
										borderColor: "background.paper",
										boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
										position: "relative",
										zIndex: 1,
										animation: "float 6s ease-in-out infinite",
										"@keyframes float": {
											"0%, 100%": {
												transform: "translateY(0px)",
											},
											"50%": {
												transform: "translateY(-20px)",
											},
										},
									}}
								/>

								{/* Decorative rings */}
								<Box
									sx={{
										position: "absolute",
										width: { xs: 260, md: 350 },
										height: { xs: 260, md: 350 },
										border: "2px solid",
										borderColor: (theme) =>
											alpha(theme.palette.primary.main, 0.2),
										borderRadius: "50%",
										animation: "pulse-ring 3s ease-in-out infinite",
										"@keyframes pulse-ring": {
											"0%, 100%": {
												transform: "scale(1)",
												opacity: 0.5,
											},
											"50%": {
												transform: "scale(1.1)",
												opacity: 0.2,
											},
										},
									}}
								/>
							</Box>
						</motion.div>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}