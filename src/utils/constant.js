export function handleScroll(id) {
  const section = document.getElementById(id);
  section && section.scrollIntoView({ behavior: "smooth" });
}
