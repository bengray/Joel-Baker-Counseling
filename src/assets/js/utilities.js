document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const parameter = urlParams.get("section");

  const element = document.getElementById(parameter);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
});
