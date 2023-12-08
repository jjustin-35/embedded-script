class Dropdown extends HTMLDivElement {
  constructor() {
    super();
    this.innerHTML = `<h1>Dropdown</h1>`;
  }
}

customElements.define('header-dropdown', Dropdown, { extends: 'div' });