import { useEffect } from "react";

function ScrollUrlSync() {
  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");
    const initialSectionId = window.location.hash.slice(1);

    if (initialSectionId) {
      requestAnimationFrame(() => {
        document.getElementById(initialSectionId)?.scrollIntoView();
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries.find((entry) => entry.isIntersecting);

        if (activeEntry) {
          const nextHash = `#${activeEntry.target.id}`;

          if (window.location.hash !== nextHash) {
            window.history.replaceState(null, "", nextHash);
          }
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return null;
}

export default ScrollUrlSync;
