class Header extends HTMLDivElement {
  constructor() {
    super();
    this.innerHTML = `
    <div class='header-wrapper'>
      
    </div>`;
  }
}

customElements.define("kdan-header", Header, { extends: "div" });
