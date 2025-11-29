import { useEffect, useRef, useState } from "react";

function pad(n) {
	return String(n).padStart(2, "0");
}

export default function Stopwatch() {
	const [seconds, setSeconds] = useState(0);
	const [running, setRunning] = useState(false);
	const intervalRef = useRef(null); // holds interval id

	// Cleanup on unmount
	useEffect(() => {
		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
				intervalRef.current = null;
			}
		};
	}, []);

	function start() {
		if (running) return;
		intervalRef.current = setInterval(() => {
			setSeconds((prev) => prev + 1);
		}, 1000);
		setRunning(true);
	}

	function pause() {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
		setRunning(false);
	}

	function reset() {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
		setRunning(false);
		setSeconds(0);
	}

	const mm = pad(Math.floor(seconds / 60));
	const ss = pad(seconds % 60);

	return (
		<div
			style={{
				fontFamily: "Inter, system-ui",
				color: "#eaeaea",
				background: "#111",
				padding: 16,
				borderRadius: 12,
				maxWidth: 320,
			}}
		>
			<h2 style={{ marginTop: 0 }}>Stopwatch ⏱</h2>
			<div style={{ fontSize: 36, margin: "12px 0" }}>
				{mm}:{ss}
			</div>
			<div style={{ display: "flex", gap: 8 }}>
				<button onClick={start} disabled={running}>
					Start
				</button>
				<button onClick={pause} disabled={!running}>
					Pause
				</button>
				<button onClick={reset}>Reset</button>
			</div>
		</div>
	);
}
