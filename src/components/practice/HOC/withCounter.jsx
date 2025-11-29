import React from "react";

export default function withCounter(WrappedComponent) {
	return function EnhancedComponent(props) {
		const [count, setCount] = React.useState(0);
		const increment = () => setCount((c) => c + 1);
		return <WrappedComponent count={count} increment={increment} {...props} />;
	};
}
