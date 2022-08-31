class clickCounter {
  constructor() {
    this.button = document.querySelector(".button");
    this.span = document.querySelector(".modal__clicks");
    this.number = sessionStorage.getItem("numbers");
    this.resetButton = document.querySelector(".reset-button");
  }
  count() {
    this.button.addEventListener("click", () => {
      this.number++;
      this.span.textContent = `${this.number} times`;
      this.showResetButton();
      sessionStorage.setItem("numbers", this.number);
    });
    this.resetNumber();
    this.saveNumber();
  }
  showResetButton() {
    if (this.number > 2) {
      this.resetButton.classList.add("reset-button--active");
    } else return;
  }
  resetNumber() {
    this.resetButton.addEventListener("click", () => {
      this.number = 0;
      this.span.textContent = `${this.number} times`;
      this.resetButton.classList.remove("reset-button--active");
      sessionStorage.clear();
    });
  }
  saveNumber() {
    sessionStorage.getItem("numbers");
  }
}
