class Header extends HTMLDivElement {
  constructor() {
    super();
    this.innerHTML = `<h1>Header</h1>`;
  }
}

customElements.define('kdan-header', Header, { extends: 'div' });
