import {
	Card,
	CardContent,
	CardActions,
	Typography,
	Stack,
	Chip,
	Button,
	Box,
	IconButton,
	alpha,
} from "@mui/material";
import { GitHub, Launch, ArrowForward } from "@mui/icons-material";
import { motion } from "framer-motion";
import ExternalLink from "../common/ExternalLinks";

export default function ProjectCard({ project }) {
	return (
		<Card
			component={motion.div}
			whileHover={{
				y: -8,
				transition: { duration: 0.3 },
			}}
			sx={{
				height: "100%",
				minHeight: 420,
				display: "flex",
				flexDirection: "column",
				borderRadius: 3,
				overflow: "hidden",
				position: "relative",
				boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
				transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
				"&:hover": {
					boxShadow: "0 12px 40px rgba(9, 132, 227, 0.2)",
					"& .project-image": {
						transform: "scale(1.05)",
					},
					"& .gradient-border": {
						opacity: 1,
					},
				},
				"&::before": {
					content: '""',
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					height: 4,
					background: "linear-gradient(45deg, #0984E3 30%, #00B894 90%)",
					borderRadius: "12px 12px 0 0",
				},
			}}
		>
			{/* Project Image/Placeholder */}
			<Box
				sx={{
					position: "relative",
					height: 200,
					overflow: "hidden",
					bgcolor: (theme) =>
						theme.palette.mode === "light"
							? alpha(theme.palette.primary.main, 0.05)
							: alpha(theme.palette.primary.main, 0.1),
				}}
			>
				{project.image ? (
					<Box
						component="img"
						src={project.image}
						alt={project.imageAlt || project.title}
						className="project-image"
						sx={{
							width: "100%",
							height: "100%",
							objectFit: "cover",
							transition: "transform 0.4s ease",
						}}
					/>
				) : (
					<Box
						className="project-image"
						sx={{
							width: "100%",
							height: "100%",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							background:
								"linear-gradient(135deg, rgba(9,132,227,0.1) 0%, rgba(0,184,148,0.1) 100%)",
							transition: "transform 0.4s ease",
						}}
					>
						<Typography
							variant="h3"
							sx={{
								fontWeight: 700,
								background:
									"linear-gradient(45deg, #0984E3 30%, #00B894 90%)",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
								opacity: 0.3,
							}}
						>
							{project.title.charAt(0)}
						</Typography>
					</Box>
				)}

				{/* Gradient overlay on hover */}
				<Box
					className="gradient-border"
					sx={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						background:
							"linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%)",
						opacity: 0,
						transition: "opacity 0.4s ease",
					}}
				/>
			</Box>

			<CardContent sx={{ pb: 1.5, flexGrow: 1 }}>
				<Typography
					variant="h6"
					gutterBottom
					sx={{
						fontWeight: 700,
						pb: 1,
						borderBottom: "2px solid",
						borderColor: (theme) => alpha(theme.palette.divider, 0.5),
					}}
				>
					{project.title}
				</Typography>

				<Typography
					color="text.secondary"
					sx={{
						mb: 2.5,
						minHeight: 60,
						display: "-webkit-box",
						WebkitLineClamp: 3,
						WebkitBoxOrient: "vertical",
						overflow: "hidden",
						textOverflow: "ellipsis",
						lineHeight: 1.6,
					}}
				>
					{project.description}
				</Typography>

				<Box sx={{ mb: 2 }}>
					<Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
						{project.stack.map((tech) => (
							<Chip
								key={tech}
								label={tech}
								size="small"
								sx={{
									fontWeight: 600,
									fontSize: "0.75rem",
									background: (theme) =>
										alpha(theme.palette.primary.main, 0.1),
									color: "primary.main",
									mb: 1,
									transition: "all 0.2s ease",
									"&:hover": {
										background: (theme) =>
											alpha(theme.palette.primary.main, 0.2),
										transform: "translateY(-2px)",
									},
								}}
							/>
						))}
					</Stack>
				</Box>
			</CardContent>

			<CardActions
				sx={{
					mt: "auto",
					pt: 1.5,
					px: 2,
					pb: 2,
					borderTop: "1px solid",
					borderColor: (theme) => alpha(theme.palette.divider, 0.5),
					justifyContent: "space-between",
				}}
			>
				<Stack direction="row" spacing={1}>
					{project.links.repo && project.links.repo !== "#" && (
						<IconButton
							component={ExternalLink}
							href={project.links.repo}
							size="small"
							sx={{
								color: "text.secondary",
								transition: "all 0.2s ease",
								"&:hover": {
									color: "primary.main",
									transform: "scale(1.15)",
								},
							}}
						>
							<GitHub fontSize="small" />
						</IconButton>
					)}
					{project.links.demo && project.links.demo !== "#" && (
						<IconButton
							component={ExternalLink}
							href={project.links.demo}
							size="small"
							sx={{
								color: "text.secondary",
								transition: "all 0.2s ease",
								"&:hover": {
									color: "primary.main",
									transform: "scale(1.15)",
								},
							}}
						>
							<Launch fontSize="small" />
						</IconButton>
					)}
				</Stack>

				<Button
					size="small"
					endIcon={<ArrowForward fontSize="small" />}
					sx={{
						fontWeight: 600,
						fontSize: "0.8125rem",
						"&:hover": {
							transform: "translateX(4px)",
						},
						transition: "all 0.2s ease",
					}}
				>
					Details
				</Button>
			</CardActions>
		</Card>
	);
}
