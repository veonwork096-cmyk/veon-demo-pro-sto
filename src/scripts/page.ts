import { initTabs } from "./tabs";

// Price tabs
document.querySelectorAll<HTMLElement>("[data-tabs]").forEach(initTabs);

// Mobile menu: close after choosing a section or pressing Escape
const menu = document.querySelector<HTMLDetailsElement>("[data-menu]");
if (menu) {
  menu.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", () => { menu.open = false; });
  });
  document.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "Escape" && menu.open) {
      menu.open = false;
      menu.querySelector<HTMLElement>("summary")?.focus();
    }
  });
}

// Sticky contact bar (phones): appears once the hero has left the screen
const bar = document.querySelector<HTMLElement>("[data-sticky-bar]");
const hero = document.getElementById("hero");
if (bar && hero && "IntersectionObserver" in window) {
  const setShown = (shown: boolean): void => {
    bar.classList.toggle("is-shown", shown);
    bar.inert = !shown;
  };
  setShown(false);
  new IntersectionObserver((entries) => {
    for (const e of entries) setShown(!e.isIntersecting);
  }).observe(hero);
} else if (bar) {
  bar.classList.add("is-shown");
}
