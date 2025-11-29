export default function UserCard({ name }) {
	return (
		<div style={card}>
			<h3>User</h3>
			<p>
				Name: <b>{name}</b>
			</p>
		</div>
	);
}

const card = {
	border: "1px solid #ddd",
	padding: 12,
	borderRadius: 8,
	minWidth: 220,
};
