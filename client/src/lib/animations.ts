export const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

export const revealText = {
    hidden: { y: "100%" },
    visible: {
        y: 0,
        transition: { duration: 0.5 }
    }
};