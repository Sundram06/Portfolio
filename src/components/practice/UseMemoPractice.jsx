import { useMemo, useState } from "react";
function slowFactorial(n) {
	let res = 1;
	for (let i = 1; i <= n; i++) {
		for (let j = 0; j < 100000000; j++) {} // simulate slow computation
		res *= i || 1;
	}
	return res;
}

function UseMemoPractice() {
	const [n, setN] = useState(1);
	const [note, setNote] = useState("");
	const fact = useMemo(() => slowFactorial(n), [n]);

	return (
		<>
			<div>UseMemoPractice</div>
			<label>
				n (0-12) :{" "}
				<input
					type="number"
					value={n}
					min={0}
					max={12}
					onChange={(e) => setN(Number(e.target.value))}
				/>
			</label>
			<p>Factorial : {fact}</p>
			<label>
				Note :{" "}
				<input
					value={note}
					onChange={(e) => setNote(e.target.value)}
					placeholder="Type something..."
				/>
			</label>
		</>
	);
}

export default UseMemoPractice;
