customElements.define("my-component", class extends HTMLElement {

    #important = this.querySelector(".important");

    constructor() {
        super();

        this.#important.textContent = "Component initialized";
    }

});