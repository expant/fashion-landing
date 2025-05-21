import gsap from "gsap";

export function useCardAnimations() {
  const onMouseMove = (event, cardClassName) => {
    const card = document.querySelector(`.${cardClassName}`);
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = (x / rect.width) * 2 - 1;
    const centerY = (y / rect.height) * 2 - 1;

    gsap.to(card, {
      rotationY: centerX * 15,
      rotationX: centerY * -15,
      transformPerspective: 1000,
      transformOrigin: "center center",
      ease: "power2.out",
      duration: 0.5,
    });
  };

  const onMouseLeave = (cardClassName) => {
    const card = document.querySelector(`.${cardClassName}`);
    gsap.to(card, {
      rotationY: 0,
      rotationX: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.5)",
    });
  };

  return {
    onMouseMove,
    onMouseLeave,
  };
}
