// hamburger
const hbg = document.getElementById("hamburger");
const nav = document.getElementById("nav-links");
hbg.addEventListener("click", () => {
  hbg.classList.toggle("open");
  nav.classList.toggle("open");
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    hbg.classList.remove("open");
    nav.classList.remove("open");
  }),
);

// scroll reveal
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        obs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 },
);
document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));

// nav active
const secs = document.querySelectorAll("section[id]");
window.addEventListener(
  "scroll",
  () => {
    let cur = "";
    secs.forEach((s) => {
      if (window.scrollY >= s.offsetTop - 130) cur = s.id;
    });
    document.querySelectorAll(".nav-links a").forEach((a) => {
      a.style.color = a.getAttribute("href") === "#" + cur ? "#fff" : "";
    });
  },
  { passive: true },
);

