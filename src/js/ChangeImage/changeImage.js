class changingImage {
  constructor() {
    this.image = document.querySelector(".section__image");
    this.windowWidth;
    this.mobileBreakpoint = "600";
  }
  change() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth < this.mobileBreakpoint) {
        this.image.src = "./images/sea_mobile.jpg";
      } else {
        this.image.src = "./images/sea_desktop.jpg";
      }
    });
  }
}
