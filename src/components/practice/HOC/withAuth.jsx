import React from "react";

export default function withAuth(WrappedComponent) {
	return function EnhancedComponent(props) {
		const { isAuth, ...rest } = props; // strip HOC-only prop
		if (!isAuth) return <p>You are not logged in!</p>;
		return <WrappedComponent {...rest} />;
	};
}
