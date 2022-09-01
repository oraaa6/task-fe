class openModal {
  constructor() {
    this.button = document.querySelector(".button");
    this.closeButton = document.querySelector(".close-button");
    this.modal = document.querySelector(".modal");
  }

  toggleModal() {
    this.modal.classList.toggle("modal--active");
  }
  open() {
    this.button.addEventListener("click", () => {
      this.toggleModal();
    });
  }
  close() {
    this.closeButton.addEventListener("click", () => {
      this.toggleModal();
    });
  }
  closingByClickingOnDocument() {
    document.addEventListener("click", () => {
      if (this.modal.classList.contains("modal--active")) {
        this.modal.classList.remove("modal--active");
        document.querySelector(".modal__window").style.backgroundColor = "none";
      } else return;
    });
  }
  showModal() {
    this.open();
    this.close();
  }
}
