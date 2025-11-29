import { Typography, Paper, Box, Stack, alpha } from "@mui/material";
import { motion } from "framer-motion";
import {
	Code,
	Speed,
	Devices,
	EmojiObjects,
} from "@mui/icons-material";
import Section from "../layouts/Section";
import { profile } from "../../content/profile";
import { SECTION_IDS, fadeInUp } from "../../core/constants";
import SkillsChips from "../common/SkillsChips";

const features = [
	{
		icon: Code,
		title: "Clean Code",
		description: "Writing maintainable, scalable code",
	},
	{
		icon: Speed,
		title: "Performance",
		description: "Optimizing for speed and efficiency",
	},
	{
		icon: Devices,
		title: "Responsive",
		description: "Seamless experiences across devices",
	},
	{
		icon: EmojiObjects,
		title: "Innovation",
		description: "Staying current with latest tech",
	},
];

export default function About() {
	return (
		<Section id={SECTION_IDS.ABOUT} tone="soft" dense>
			<motion.div
				initial="initial"
				whileInView="animate"
				viewport={{ once: true }}
				variants={fadeInUp}
			>
				<Paper
					sx={{
						p: { xs: 3, md: 4 },
						borderRadius: 3,
						boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
						background: (theme) =>
							theme.palette.mode === "light"
								? "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,249,250,0.9) 100%)"
								: "linear-gradient(135deg, rgba(26,29,35,0.9) 0%, rgba(18,22,33,0.9) 100%)",
						backdropFilter: "blur(10px)",
						border: "1px solid",
						borderColor: (theme) => alpha(theme.palette.divider, 0.1),
					}}
				>
					<Typography
						variant="h3"
						gutterBottom
						sx={{
							fontWeight: 700,
							background:
								"linear-gradient(45deg, #2D3436 30%, #0984E3 90%)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							mb: 3,
						}}
					>
						About Me
					</Typography>

					<Stack spacing={3}>
						<Typography
							variant="body1"
							color="text.secondary"
							sx={{ lineHeight: 1.8, fontSize: "1.0625rem" }}
						>
							I'm a passionate frontend developer with a keen eye for
							detail and a love for creating beautiful, functional web
							applications. With expertise in modern JavaScript frameworks
							and a strong foundation in full-stack development, I bring
							ideas to life through code.
						</Typography>

						<Typography
							variant="body1"
							color="text.secondary"
							sx={{ lineHeight: 1.8, fontSize: "1.0625rem" }}
						>
							My approach combines technical excellence with user-centered
							design, ensuring that every project not only looks great but
							also delivers exceptional performance and accessibility. I'm
							constantly learning and adapting to new technologies to stay
							at the forefront of web development.
						</Typography>

						<Typography
							variant="body1"
							color="text.secondary"
							sx={{ lineHeight: 1.8, fontSize: "1.0625rem" }}
						>
							When I'm not coding, you'll find me exploring new frameworks,
							contributing to open-source projects, or sharing knowledge
							with the developer community.
						</Typography>

						{/* Feature Cards - Horizontal Layout */}
						<Box sx={{ mt: 2 }}>
							<Stack
								direction={{ xs: "column", sm: "row" }}
								spacing={2}
								sx={{ flexWrap: "wrap" }}
								useFlexGap
							>
								{features.map((feature, index) => (
									<Box
										key={feature.title}
										component={motion.div}
										initial="initial"
										whileInView="animate"
										viewport={{ once: true }}
										variants={{
											...fadeInUp,
											animate: {
												...fadeInUp.animate,
												transition: {
													delay: index * 0.1,
													duration: 0.4,
												},
											},
										}}
										sx={{
											flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 8px)" },
										}}
									>
										<Paper
											sx={{
												p: 2.5,
												borderRadius: 2,
												boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
												transition: "all 0.3s ease",
												height: "100%",
												"&:hover": {
													transform: "translateY(-4px)",
													boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
												},
											}}
										>
											<Stack
												direction="row"
												spacing={2}
												alignItems="flex-start"
											>
												<Box
													sx={{
														width: 48,
														height: 48,
														borderRadius: 2,
														background:
															"linear-gradient(135deg, #0984E3 0%, #00B894 100%)",
														display: "flex",
														alignItems: "center",
														justifyContent: "center",
														flexShrink: 0,
													}}
												>
													<feature.icon
														sx={{ color: "white", fontSize: 24 }}
													/>
												</Box>
												<Box>
													<Typography
														variant="subtitle1"
														fontWeight={600}
														gutterBottom
													>
														{feature.title}
													</Typography>
													<Typography
														variant="body2"
														color="text.secondary"
														sx={{ lineHeight: 1.6 }}
													>
														{feature.description}
													</Typography>
												</Box>
											</Stack>
										</Paper>
									</Box>
								))}
							</Stack>
						</Box>

						{/* Skills Section */}
						<Box sx={{ mt: 2 }}>
							<Typography
								variant="h6"
								gutterBottom
								sx={{ fontWeight: 600, mb: 2 }}
							>
								Technical Skills
							</Typography>
							<SkillsChips skills={profile.skills} />
						</Box>
					</Stack>
				</Paper>
			</motion.div>
		</Section>
	);
}
