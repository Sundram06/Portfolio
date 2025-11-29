import React from "react";

const Child = React.memo(function Child({ value, onIncrement }) {
	console.log("Child rendered");
	return (
		<div style={{ margin: "10px", border: "2px solid blue", padding: "10px" }}>
			<h1>Child</h1>
			<p>Count : {value}</p>
			<button onClick={onIncrement}>Increment</button>
		</div>
	);
});

export default Child;
