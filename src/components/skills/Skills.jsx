import {
	Box,
	Container,
	Typography,
	Grid,
	useTheme,
	alpha,
} from "@mui/material";
import { motion } from "framer-motion";
import { SECTION_IDS, fadeInUp } from "../../core/constants";
import { profile } from "../../content/profile";

// Skill categories with their respective colors
const SKILL_CATEGORIES = {
	"Frontend Development": {
		color: "#0984E3",
		skills: ["React", "Next.js", "TypeScript", "Material-UI", "Tailwind CSS"],
	},
	"Backend Development": {
		color: "#00B894",
		skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL"],
	},
	"Tools & Technologies": {
		color: "#6C5CE7",
		skills: ["Git", "Docker", "AWS", "Jest", "Webpack"],
	},
};

const SkillBar = ({ skill, progress, color, index }) => {
	return (
		<Box sx={{ mb: 2 }}>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					mb: 0.5,
				}}
			>
				<Typography
					variant="subtitle2"
					sx={{
						fontWeight: 500,
						color: "text.primary",
					}}
				>
					{skill}
				</Typography>
				<Typography
					variant="body2"
					sx={{
						fontWeight: 500,
						color: "text.secondary",
					}}
				>
					{progress}%
				</Typography>
			</Box>
			<Box
				sx={{
					height: 6,
					borderRadius: 3,
					bgcolor: (theme) => alpha(color, 0.12),
					overflow: "hidden",
				}}
			>
				<motion.div
					initial={{ width: 0 }}
					whileInView={{ width: `${progress}%` }}
					viewport={{ once: true }}
					transition={{
						duration: 1,
						delay: index * 0.1,
						ease: "easeOut",
					}}
					style={{
						height: "100%",
						background: `linear-gradient(90deg, ${color} 0%, ${alpha(
							color,
							0.8
						)} 100%)`,
						borderRadius: 12,
					}}
				/>
			</Box>
		</Box>
	);
};

const SkillCategory = ({ title, skills, color, index }) => {
	const theme = useTheme();

	return (
		<motion.div
			initial="initial"
			whileInView="animate"
			viewport={{ once: true }}
			variants={{
				initial: { opacity: 0, y: 20 },
				animate: {
					opacity: 1,
					y: 0,
					transition: {
						duration: 0.5,
						delay: index * 0.2,
					},
				},
			}}
		>
			<Box
				sx={{
					p: 3,
					height: "100%",
					borderRadius: 2,
					bgcolor: "background.paper",
					boxShadow: `0 4px 20px ${alpha(theme.palette.common.black, 0.1)}`,
					position: "relative",
					"&::before": {
						content: '""',
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						height: 4,
						background: `linear-gradient(45deg, ${color} 30%, ${alpha(
							color,
							0.8
						)} 90%)`,
						borderRadius: "4px 4px 0 0",
					},
				}}
			>
				<Typography
					variant="h6"
					sx={{
						mb: 3,
						fontWeight: 600,
						color: color,
					}}
				>
					{title}
				</Typography>
				{skills.map((skill, i) => (
					<SkillBar
						key={skill}
						skill={skill}
						progress={Math.floor(Math.random() * (95 - 85 + 1)) + 85} // Random progress between 85-95%
						color={color}
						index={i}
					/>
				))}
			</Box>
		</motion.div>
	);
};

export default function Skills() {
	return (
		<Box
			id={SECTION_IDS.SKILLS}
			component="section"
			sx={{
				py: { xs: 8, md: 12 },
				background: (theme) =>
					`linear-gradient(180deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
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
							background: "linear-gradient(45deg, #2D3436 30%, #0984E3 90%)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
						}}
					>
						Technical Skills
					</Typography>
					<Typography
						variant="h5"
						color="text.secondary"
						sx={{ mb: 8, textAlign: "center" }}
					>
						Technologies and tools I work with
					</Typography>
				</motion.div>

				<Grid container spacing={3}>
					{Object.entries(SKILL_CATEGORIES).map(
						([category, { color, skills }], index) => (
							<Grid key={category} item xs={12} md={4}>
								<SkillCategory
									title={category}
									skills={skills}
									color={color}
									index={index}
								/>
							</Grid>
						)
					)}
				</Grid>
			</Container>
		</Box>
	);
}
