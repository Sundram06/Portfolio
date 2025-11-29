import { useEffect, useState } from "react";

function UseEffectPractice() {
	const [data, setData] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://jsonplaceholder.typicode.com/users"
				);
				const data = await response.json();
				console.log(data);
				setData(data);
			} catch (error) {
				console.log("Error fetching data:", error);
			}
		};
		fetchData();
	}, []);
	return (
		<div>
			<h1>UseEffect Practice</h1>
			<ul>
				{data.map((user) => (
					<li>{user.name}</li>
				))}
			</ul>
		</div>
	);
}

export default UseEffectPractice;
