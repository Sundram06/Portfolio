import { useEffect, useState } from "react";

function Counter() {
	const [count, setCount] = useState(() => {
		const saved = localStorage.getItem("count");
		return saved !== null ? Number(saved) : 0;
	});

	useEffect(() => {
		localStorage.setItem("count", count);
	}, [count]);

	function decreaseCount() {
		setCount((prevCount) => prevCount - 1);
	}

	function increaseCount() {
		setCount((prevCount) => prevCount + 1);
	}
	function handleReset() {
		setCount(0);
	}
	return (
		<>
			<h1>Counter Practice</h1>
			<div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
				<button onClick={decreaseCount}>Decrease Count</button>
				<p style={{ margin: 0 }}>{count}</p>
				<button onClick={increaseCount}>Increase Count</button>
				<button onClick={handleReset}>Reset</button>
			</div>
		</>
	);
}

export default Counter;
