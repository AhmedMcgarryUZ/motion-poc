import { animate, spring } from "motion";
// DEFAULT easing: spring({ mass: 1, damping: 10, stiffness: 100, velocity: 0 })
// Copied the same values for animeJs for comparison

const motionListEnter = (item: any) => {
    animate(item,
        { x: [200, 0] },
        {
            easing: spring(),
            delay: 0.1,
        }
    );
};

export default motionListEnter
