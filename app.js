class ToastAlert extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

window.customElements.define("toast-alert", ToastAlert);
