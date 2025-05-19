import gsap from "gsap";

export const initTimeline = () => {
  let tl = gsap.timeline({
    onComplete: () => {
      tl.kill();
    },
  });
  return tl;
};
