// Price tabs: without script every panel shows in order with its own heading.
// With script: a keyboard-operable tablist (arrows, Home, End), one panel visible, indicator moved by transform.
export function initTabs(root: HTMLElement): void {
  const list = root.querySelector<HTMLElement>("[data-tablist]");
  const indicator = root.querySelector<HTMLElement>("[data-indicator]");
  if (!list) return;
  const tabs = Array.from(list.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
  const panels = Array.from(root.querySelectorAll<HTMLElement>("[data-panel]"));
  list.hidden = false;
  root.classList.add("is-ready");

  const moveIndicator = (tab: HTMLButtonElement): void => {
    if (!indicator) return;
    indicator.style.transform = `translateX(${tab.offsetLeft}px) scaleX(${tab.offsetWidth / 100})`;
  };

  const select = (index: number, focus: boolean, animate: boolean): void => {
    tabs.forEach((tab, i) => {
      const on = i === index;
      tab.setAttribute("aria-selected", String(on));
      tab.tabIndex = on ? 0 : -1;
      const panel = panels[i];
      if (!panel) return;
      panel.hidden = !on;
      panel.classList.toggle("is-entering", on && animate);
    });
    const current = tabs[index];
    if (!current) return;
    moveIndicator(current);
    if (focus) {
      current.focus();
      current.scrollIntoView({ block: "nearest", inline: "nearest" });
    }
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => select(i, false, true));
    tab.addEventListener("keydown", (e: KeyboardEvent) => {
      let next = -1;
      if (e.key === "ArrowRight") next = (i + 1) % tabs.length;
      else if (e.key === "ArrowLeft") next = (i - 1 + tabs.length) % tabs.length;
      else if (e.key === "Home") next = 0;
      else if (e.key === "End") next = tabs.length - 1;
      if (next < 0) return;
      e.preventDefault();
      select(next, true, true);
    });
  });

  select(0, false, false);
  const relayout = (): void => {
    const current = tabs.find((t) => t.getAttribute("aria-selected") === "true");
    if (current) moveIndicator(current);
  };
  window.addEventListener("resize", relayout, { passive: true });
  if (document.fonts) void document.fonts.ready.then(relayout);
}
