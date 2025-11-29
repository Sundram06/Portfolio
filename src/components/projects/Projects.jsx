import { useState } from "react";
import { Grid, Typography, Box, Container, Stack, Chip } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../content/projects";
import ProjectCard from "./ProjectCard";
import { SECTION_IDS, fadeInUp } from "../../core/constants";

// Get unique technologies from all projects
const allTechnologies = [...new Set(projects.flatMap((p) => p.stack))];

export default function Projects() {
	const [selectedTech, setSelectedTech] = useState("All");

	const filteredProjects =
		selectedTech === "All"
			? projects
			: projects.filter((p) => p.stack.includes(selectedTech));

	return (
		<Box
			id={SECTION_IDS.PROJECTS}
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
						Featured Projects
					</Typography>
					<Typography
						variant="h5"
						color="text.secondary"
						sx={{ mb: 6, textAlign: "center" }}
					>
						A collection of my work that showcases my skills and experience
					</Typography>
				</motion.div>

				<motion.div
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
					variants={fadeInUp}
				>
					<Stack
						direction="row"
						spacing={1}
						sx={{
							mb: 6,
							pb: 2,
							overflowX: "auto",
							"&::-webkit-scrollbar": {
								height: 6,
								borderRadius: 3,
								backgroundColor: "rgba(0,0,0,0.05)",
							},
							"&::-webkit-scrollbar-thumb": {
								backgroundColor: "rgba(0,0,0,0.1)",
								borderRadius: 3,
							},
						}}
					>
						<Chip
							label="All"
							onClick={() => setSelectedTech("All")}
							color={selectedTech === "All" ? "primary" : "default"}
							variant={selectedTech === "All" ? "filled" : "outlined"}
							sx={{ fontWeight: 500 }}
						/>
						{allTechnologies.map((tech) => (
							<Chip
								key={tech}
								label={tech}
								onClick={() => setSelectedTech(tech)}
								color={selectedTech === tech ? "primary" : "default"}
								variant={selectedTech === tech ? "filled" : "outlined"}
								sx={{ fontWeight: 500 }}
							/>
						))}
					</Stack>
				</motion.div>

				<Grid container spacing={3}>
					<AnimatePresence mode="wait">
						{filteredProjects.map((project, index) => (
							<Grid
								key={project.title}
								item
								xs={12}
								sm={6}
								md={4}
								component={motion.div}
								layout
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 20 }}
								transition={{
									duration: 0.3,
									delay: index * 0.1,
								}}
								sx={{
									display: "flex",
									width: "100%",
								}}
							>
								<Box sx={{ width: "100%" }}>
									<ProjectCard project={project} />
								</Box>
							</Grid>
						))}
					</AnimatePresence>
				</Grid>
			</Container>
		</Box>
	);
}
