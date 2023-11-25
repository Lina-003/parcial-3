import "./components/export"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {
        this.render()
    }

    render() {
        const datos = this.ownerDocument.createElement('app-datos');
        this.shadowRoot?.appendChild(datos);
    }
}

customElements.define('app-container', AppContainer)