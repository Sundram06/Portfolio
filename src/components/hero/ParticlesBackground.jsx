import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
	const particlesInit = useCallback(async (engine) => {
		await loadFull(engine);
	}, []);

	return (
		<Particles
			id="tsparticles"
			init={particlesInit}
			options={{
				fullScreen: false,
				background: {
					color: {
						value: "transparent",
					},
				},
				fpsLimit: 120,
				particles: {
					color: {
						value: "#0984E3",
					},
					links: {
						color: "#0984E3",
						distance: 150,
						enable: true,
						opacity: 0.2,
						width: 1,
					},
					collisions: {
						enable: false,
					},
					move: {
						direction: "none",
						enable: true,
						outModes: {
							default: "bounce",
						},
						random: true,
						speed: 1,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 800,
						},
						value: 80,
					},
					opacity: {
						value: 0.2,
					},
					shape: {
						type: "circle",
					},
					size: {
						value: { min: 1, max: 3 },
					},
				},
				detectRetina: true,
			}}
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				zIndex: 0,
			}}
		/>
	);
}
