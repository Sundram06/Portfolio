import { Stack, Chip, useTheme, alpha } from "@mui/material";
import { motion } from "framer-motion";

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const item = {
	hidden: { opacity: 0, scale: 0.8 },
	show: { opacity: 1, scale: 1 },
};

export default function SkillsChips({ skills }) {
	const theme = useTheme();

	return (
		<Stack
			component={motion.div}
			variants={container}
			initial="hidden"
			animate="show"
			direction="row"
			flexWrap="wrap"
			gap={1}
			sx={{ mt: 2 }}
		>
			{skills.map((skill) => (
				<motion.div key={skill} variants={item}>
					<Chip
						label={skill}
						sx={{
							fontWeight: 500,
							backgroundColor: alpha(theme.palette.primary.main, 0.1),
							color: "primary.main",
							"&:hover": {
								backgroundColor: alpha(theme.palette.primary.main, 0.2),
								transform: "translateY(-2px)",
							},
							transition: "all 0.2s ease-in-out",
						}}
					/>
				</motion.div>
			))}
		</Stack>
	);
}
