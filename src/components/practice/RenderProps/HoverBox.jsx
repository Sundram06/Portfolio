export default function HoverBox({ count, increment }) {
	return (
		<div style={box} onMouseOver={increment}>
			<h3>Hovered {count} times</h3>
		</div>
	);
}

const box = {
	border: "1px solid #ddd",
	padding: 0,
	margin: 0,
	borderRadius: 8,
	width: 200,
	textAlign: "center",
};
