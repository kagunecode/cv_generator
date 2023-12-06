import { motion } from "framer-motion";

const animations = {
	initial: { opacity: 0, x: 100 },
	animate: { opacity: 1, x: 0 },
	exit: { opacity: 0, y: -100 },
};

const errorAnimations = {
	initial: { opacity: 0, y: 1000 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -600 },
};

function AnimatedPage({ children }) {
	return (
		<motion.div
			variants={animations}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 0.2 }}
		>
			{children}
		</motion.div>
	);
}

function AnimateError({ children }) {
	return (
		<motion.div
			variants={errorAnimations}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 0.3 }}
		>
			{children}
		</motion.div>
	);
}

export { AnimatedPage, AnimateError };
