export default function HoverText({ count, increment }) {
	return (
		<div style={{ fontsize: 18 }} onMouseOver={increment}>
			<p>Hovered text : {count} times</p>
		</div>
	);
}
