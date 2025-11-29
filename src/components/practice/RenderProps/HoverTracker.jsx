import { useState } from "react";

export default function HoverTracker({ children }) {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount((c) => c + 1);
	};

	return children({ count, increment });
}
