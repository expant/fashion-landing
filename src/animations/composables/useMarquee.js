import { ref, onMounted, onBeforeUnmount } from "vue";
import gsap from "gsap";
import debounce from "@/utils/debounce";

export function useMarquee(duration) {
  const marqueeContainer = ref(null);

  const playMarquee = () => {
    const innerItems =
      marqueeContainer.value.querySelectorAll(".marquee-inner");

    innerItems.forEach((item) => {
      gsap.to(
        item,
        {
          x: "-100vw",
          repeat: -1,
          ease: "none",
          duration,
        },
        "<"
      );
    });
  };

  const handleResize = debounce(() => playMarquee(), 250);

  onMounted(() => {
    playMarquee();
    window.addEventListener("resize", handleResize);
  });

  onBeforeUnmount(() => window.removeEventListener("resize", handleResize));

  return {
    marqueeContainer,
  };
}
