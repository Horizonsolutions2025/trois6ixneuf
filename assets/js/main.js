document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navLinkItems = document.querySelectorAll(".nav-links a");

  if (hamburger && navLinks) {
    hamburger.setAttribute("aria-expanded", "false");

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("open");
      document.body.classList.toggle("nav-open");
      const expanded = hamburger.classList.contains("active");
      hamburger.setAttribute("aria-expanded", expanded ? "true" : "false");
    });

    navLinkItems.forEach((link) =>
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("open");
        document.body.classList.remove("nav-open");
        hamburger.setAttribute("aria-expanded", "false");
      })
    );
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  document.querySelectorAll("[data-animate]").forEach((section) => {
    observer.observe(section);
  });
});
