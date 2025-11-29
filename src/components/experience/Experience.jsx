import {
	Box,
	Container,
	Typography,
	Paper,
	Stack,
	Chip,
	alpha,
} from "@mui/material";
import { WorkOutline, CalendarToday } from "@mui/icons-material";
import { motion } from "framer-motion";
import { SECTION_IDS, fadeInUp } from "../../core/constants";
import { experience } from "../../content/experience";

export default function Experience() {
	return (
		<Box
			id={SECTION_IDS.EXPERIENCE}
			component="section"
			sx={{
				py: { xs: 8, md: 12 },
				background: (theme) =>
					theme.palette.mode === "light"
						? "linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)"
						: "linear-gradient(180deg, #0f1419 0%, #1a1d23 100%)",
			}}
		>
			<Container maxWidth="lg">
				<motion.div
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
					variants={fadeInUp}
				>
					<Typography
						variant="h2"
						sx={{
							mb: 1,
							fontWeight: 700,
							textAlign: "center",
							background:
								"linear-gradient(45deg, #2D3436 30%, #0984E3 90%)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
						}}
					>
						Professional Journey
					</Typography>
					<Typography
						variant="h5"
						color="text.secondary"
						sx={{ mb: 8, textAlign: "center" }}
					>
						My career path and achievements
					</Typography>
				</motion.div>

				<Stack spacing={4} sx={{ maxWidth: 900, mx: "auto" }}>
					{experience.map((role, index) => (
						<motion.div
							key={role.company}
							initial="initial"
							whileInView="animate"
							viewport={{ once: true }}
							variants={{
								...fadeInUp,
								animate: {
									...fadeInUp.animate,
									transition: { delay: index * 0.2, duration: 0.5 },
								},
							}}
						>
							<Paper
								sx={{
									p: { xs: 3, md: 4 },
									borderRadius: 3,
									boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
									position: "relative",
									overflow: "hidden",
									transition: "all 0.3s ease",
									"&:hover": {
										transform: "translateY(-4px)",
										boxShadow: "0 12px 40px rgba(9, 132, 227, 0.15)",
									},
									"&::before": {
										content: '""',
										position: "absolute",
										top: 0,
										left: 0,
										right: 0,
										height: 4,
										background:
											"linear-gradient(45deg, #0984E3 30%, #00B894 90%)",
									},
								}}
							>
								<Stack spacing={2.5}>
									{/* Header */}
									<Stack
										direction={{ xs: "column", sm: "row" }}
										justifyContent="space-between"
										alignItems={{ xs: "flex-start", sm: "center" }}
										spacing={2}
									>
										<Box>
											<Stack
												direction="row"
												alignItems="center"
												spacing={1}
												sx={{ mb: 0.5 }}
											>
												<WorkOutline
													sx={{
														color: "primary.main",
														fontSize: 24,
													}}
												/>
												<Typography
													variant="h5"
													sx={{
														fontWeight: 700,
														color: "primary.main",
													}}
												>
													{role.company}
												</Typography>
											</Stack>
											<Typography
												variant="h6"
												color="text.primary"
												sx={{ fontWeight: 600 }}
											>
												{role.role}
											</Typography>
										</Box>

										<Chip
											icon={<CalendarToday sx={{ fontSize: 16 }} />}
											label={role.period}
											sx={{
												px: 1,
												py: 2.5,
												height: "auto",
												fontSize: "0.9375rem",
												fontWeight: 600,
												background: (theme) =>
													alpha(theme.palette.primary.main, 0.1),
												color: "primary.main",
												"& .MuiChip-icon": {
													color: "primary.main",
												},
											}}
										/>
									</Stack>

									{/* Responsibilities */}
									<Box>
										<Stack spacing={1.5}>
											{role.bullets.map((bullet, i) => (
												<Stack
													key={i}
													direction="row"
													spacing={2}
													alignItems="flex-start"
												>
													<Box
														sx={{
															width: 6,
															height: 6,
															borderRadius: "50%",
															bgcolor: "primary.main",
															mt: 1,
															flexShrink: 0,
														}}
													/>
													<Typography
														variant="body1"
														color="text.secondary"
														sx={{ lineHeight: 1.7 }}
													>
														{bullet}
													</Typography>
												</Stack>
											))}
										</Stack>
									</Box>
								</Stack>
							</Paper>
						</motion.div>
					))}
				</Stack>
			</Container>
		</Box>
	);
}
