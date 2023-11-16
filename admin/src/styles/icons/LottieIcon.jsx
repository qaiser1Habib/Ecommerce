import { useRef, useEffect } from "react";
import lottie from "lottie-web";

import deleteAnimation from "../../assets/icons/animated/systemOutline39Trash.json";
import successAnimation from "../../assets/icons/animated/successIcon.json";
// Import other animation JSON files as needed

const animationConfigs = {
	delete: deleteAnimation,
	success: successAnimation,
	// Add more animation types and their imported animation data here
};

export const LottieIcon = ({ iconType, style }) => {
	const containerRef = useRef(null);
	const animationData = animationConfigs[iconType];

	useEffect(() => {
		if (animationData) {
			const animation = lottie.loadAnimation({
				container: containerRef.current,
				animationData,
				loop: true,
				autoplay: true,
			});

			return () => {
				animation.destroy();
			};
		}
	}, [animationData]);

	return <div ref={containerRef} style={style} />;
};
