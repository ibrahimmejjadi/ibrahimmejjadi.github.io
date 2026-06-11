


const links = document.querySelectorAll(".nav_link");
const sections = {
  "HOME": document.querySelector(".Hero"),
  "PROJECTS": document.querySelector(".Projects"),
  "SKILLS": document.querySelector(".Skills"),
  "CONTACT": document.querySelector(".Contact")
};

links.forEach(link => {
  link.addEventListener("click", () => {
    const target = sections[link.textContent];
    if (target) {
      target.scrollIntoView({ behavior: "smooth"});
    }
  });
});


















