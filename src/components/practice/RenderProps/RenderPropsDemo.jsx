import HoverTracker from "./HoverTracker";
import HoverText from "./HoverText";
import HoverBox from "./HoverBox";

function RenderPropsDemo() {
	return (
		<div style={{ padding: 20 }}>
			<h2>Render Props Demo</h2>
			<HoverTracker>
				{({ count, increment }) => (
					<HoverBox count={count} increment={increment} />
				)}
			</HoverTracker>
			<HoverTracker>
				{({ count, increment }) => (
					<HoverText count={count} increment={increment} />
				)}
			</HoverTracker>
		</div>
	);
}

export default RenderPropsDemo;
