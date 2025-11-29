import { useRef } from "react";

function UseRefPractice() {
	const ref = useRef();
	const handleClick = () => {
		ref.current.focus();
	};
	return (
		<div>
			<h1>UseRef Practice</h1>
			<input type="text" ref={ref} />
			<button onClick={handleClick}>Focus Input</button>
		</div>
	);
}

export default UseRefPractice;
