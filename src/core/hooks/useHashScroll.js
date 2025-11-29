import { useEffect } from "react";

export default function useHashScroll(offset = 120) {
	useEffect(() => {
		const scrollToHash = () => {
			const id = decodeURIComponent(window.location.hash.replace("#", ""));
			if (!id) return;
			const el = document.getElementById(id);
			if (!el) return;
			const y = el.getBoundingClientRect().top + window.scrollY - offset;
			window.scrollTo({ top: y, behavior: "smooth" });
		};
		// initial load and on hash changes
		setTimeout(scrollToHash, 0);
		window.addEventListener("hashchange", scrollToHash);
		return () => window.removeEventListener("hashchange", scrollToHash);
	}, [offset]);
}
