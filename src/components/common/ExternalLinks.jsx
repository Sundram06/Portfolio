import Link from "@mui/material/Link";

export default function ExternalLink({ href, children, ...props }) {
	return (
		<Link href={href} target="_blank" rel="noopener noreferrer" {...props}>
			{children}
		</Link>
	);
}
