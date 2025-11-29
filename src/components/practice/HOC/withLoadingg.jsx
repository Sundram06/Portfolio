import React from "react";

export default function withLoadingg(WrappedComponent) {
	return function EnhancedComponent(props) {
		if (props.loading) return <p>Loading...</p>;
		const { loading, ...rest } = props; // strip HOC-only prop
		return <WrappedComponent {...rest} />;
	};
}
