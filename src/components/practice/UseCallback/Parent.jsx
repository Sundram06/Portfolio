import React from "react";
import { useState } from "react";
import Child from "./Child";

function Parent() {
	const [count, setCount] = useState(0);
	const [note, setNote] = useState("");
	// const onIncrement = () => setCount((c) => c + 1);
	const onIncrement = React.useCallback(() => {
		setCount((c) => c + 1);
	}, []);
	return (
		<div style={{ margin: "10px", border: "2px solid black", padding: "10px" }}>
			<h1>Parent</h1>
			<Child value={count} onIncrement={onIncrement} />
			<div style={{ marginTop: "10px" }}>
				<label>
					Note :
					<input
						value={note}
						onChange={(e) => setNote(e.target.value)}
						placeholder="Type something..."
					/>
				</label>
			</div>
		</div>
	);
}

export default Parent;
