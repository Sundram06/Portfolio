import { useState } from "react";
import UserCard from "./UserCard";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

import withLoading from "./WithLoadingg";
import withAuth from "./withAuth";
import withCounter from "./withCounter";

const UserCardWithLoading = withLoading(UserCard);
const SecureUserCard = withAuth(UserCard);
const EnhancedClick = withCounter(ClickCounter);
const EnhancedHover = withCounter(HoverCounter);
const ClickWithLoading = withLoading(withCounter(ClickCounter));
const SecureUserCardWithLoading = withAuth(withLoading(UserCard));
function HOCDemo() {
	const [name, setName] = useState("Sundram");
	const [loading, setLoading] = useState(false);
	const [isAuth, setIsAuth] = useState(true);

	const page = {
		border: "1px solid #ddd",
		padding: 12,
		margin: 12,
		borderRadius: 8,
	};
	const row = {
		marginBottom: 8,
		display: "flex",
		alignItems: "center",
	};
	const input = {
		padding: 8,
		borderRadius: 8,
		border: "1px solid #ddd",
	};
	const toggle = {
		marginLeft: 12,
	};

	return (
		<div style={page}>
			<h2>HOC - Demo</h2>
			<div style={row}>
				<label>
					Name:&nbsp;
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						style={input}
					/>
				</label>
				<label style={toggle}>
					<input
						type="checkbox"
						checked={loading}
						onChange={(e) => setLoading(e.target.checked)}
					/>
					&nbsp;loading
				</label>

				<label style={toggle}>
					<input
						type="checkbox"
						checked={isAuth}
						onChange={(e) => setIsAuth(e.target.checked)}
					/>
					&nbsp;isAuth
				</label>
			</div>
			<section>
				<h3>withLoading(UserCard)</h3>
				<UserCardWithLoading loading={loading} name={name} />
			</section>
			<section>
				<h3>withAuth(UserCard)</h3>
				<SecureUserCard isAuth={isAuth} name={name} />
			</section>
			<section>
				<h3>withCounter(Click/Hover)</h3>
				<div style={row}>
					<EnhancedClick />
					<EnhancedHover />
				</div>
			</section>

			<section>
				<h3>Combine : withLoading(withCounter(ClickCounter))</h3>
				<ClickWithLoading loading={loading} />
			</section>
			<section>
				<h3>Bonus: withAuth(withLoading(UserCard))</h3>
				<SecureUserCardWithLoading
					isAuth={isAuth}
					loading={loading}
					name={name}
				/>
			</section>
		</div>
	);
}

export default HOCDemo;
