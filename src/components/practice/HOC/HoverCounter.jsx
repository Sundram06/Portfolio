export default function HoverCounter({ count, increment }) {
	return (
		<div style={box} onMouseOver={increment}>
			Hovered {count} times
		</div>
	);
}

const box = {
	border: "1px solid #ddd",
	padding: 12,
	borderRadius: 8,
	minWidth: 200,
	textAlign: "center",
};
