// Navbar Toggle
if (window.innerWidth > 992) {
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("mouseover", function () {
      this.querySelector(".dropdown-toggle").click();
    });

    dropdown.addEventListener("mouseout", function () {
      this.querySelector(".dropdown-toggle").click();
    });
  });
}