import { useEffect, useState } from "react";

// Simple scroll spy to highlight active section in navbar
export default function useScrollSpy(selectors, offset = 120) {
	const [activeId, setActiveId] = useState("");
	useEffect(() => {
		const handler = () => {
			let current = "";
			selectors.forEach((id) => {
				const el = document.getElementById(id);
				if (!el) return;
				const top = el.getBoundingClientRect().top;
				if (top - offset <= 0) current = id;
			});
			setActiveId(current || selectors[0]);
		};
		window.addEventListener("scroll", handler, { passive: true });
		handler();
		return () => window.removeEventListener("scroll", handler);
	}, [selectors, offset]);
	return activeId;
}
