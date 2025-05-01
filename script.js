const toggles = document.querySelector(".toggles");

if (toggles) {
  const options = toggles.querySelectorAll("input");

  options.forEach((option) => {
    option.addEventListener("click", (event) => {
      console.log(event.target.value);
      document
        .querySelector("body")
        .style.setProperty("--_brand-color", event.target.value.toLowerCase());
    });
  });
}
