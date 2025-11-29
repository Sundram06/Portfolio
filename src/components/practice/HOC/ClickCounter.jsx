export default function ClickCounter({ count, increment }) {
	return (
		<button style={btn} onClick={increment}>
			Clicked {count} times
		</button>
	);
}

const btn = {
	padding: "8px 12px",
	borderRadius: 8,
	border: "1px solid #ccc",
	cursor: "pointer",
};
