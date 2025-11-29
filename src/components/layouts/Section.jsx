import { Container, Box } from "@mui/material";

export default function Section({
	id,
	tone = "plain",
	dense = false,
	children,
	sx,
}) {
	const bgByTone = (theme) =>
		({
			plain: "transparent",
			soft: theme.palette.grey[50], // subtle contrast vs page bg
			raised: theme.palette.background.paper, // elevated surface
		}[tone]);

	return (
		<Box
			component="section"
			id={id}
			sx={{
				py: dense ? { xs: 4, md: 6 } : { xs: 6, md: 8 }, // tighter than before
				bgcolor: (t) => bgByTone(t),
				...sx,
			}}
		>
			<Container maxWidth="lg">{children}</Container>
		</Box>
	);
}
