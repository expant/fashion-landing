import gsap from "gsap";
import { initTimeline } from "@/animations/utils/helpers.js";
import { onMounted } from "vue";

export function useMenuAnimations() {
  const setMenu = () => {
    gsap.set(".header__menu-mobile", { y: "-100vh", duration: 0.4 });
  };

  const showMenu = () => {
    const menuItems = document.querySelectorAll(".header__menu-mobile-item");

    initTimeline()
      .fromTo(
        ".header__menu-mobile",
        {
          y: "-100vh",
        },
        {
          y: 0,
          duration: 0.4,
        }
      )
      .from(menuItems, {
        opacity: 0,
        y: 20,
        duration: 0.4,
        stagger: 0.15,
      });
  };

  const hideMenu = () => {
    gsap.fromTo(
      ".header__menu-mobile",
      {
        y: 0,
      },
      {
        y: "-100vh",
        duration: 0.4,
      }
    );
  };

  const scaleUpMenuItem = (itemId) => {
    gsap.to(`.menu-mobile-item${itemId}`, {
      scale: 1.1,
      duration: 0.2,
    });
  };

  const resetMenuItemScale = (itemId) => {
    gsap.to(`.menu-mobile-item${itemId}`, {
      scale: 1,
      duration: 0.2,
    });
  };

  const activateCircleElevation = (targetClassName) => {
    const item = document.querySelector(`.${targetClassName}`);
    const circle = item.querySelector(".circle");

    initTimeline().to(circle, {
      scale: 1,
      opacity: 1,
      duration: 0.3,
    });
  };

  const deactivateCircleElevation = (targetClassName) => {
    const item = document.querySelector(`.${targetClassName}`);
    const circle = item.querySelector(".circle");

    initTimeline().to(circle, {
      scale: 0,
      opacity: 0,
      duration: 0.3,
    });
  };

  onMounted(() => {
    setMenu();
  });

  return {
    setMenu,
    showMenu,
    hideMenu,
    scaleUpMenuItem,
    resetMenuItemScale,
    activateCircleElevation,
    deactivateCircleElevation,
  };
}
