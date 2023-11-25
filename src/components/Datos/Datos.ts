import { Dato } from "../../types/datos";
import firebase from "../../utils/firebase";

const userDatos: Dato = {
    name: "",
    color: "",
    letra: ""
}

class Datos extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const lName = this.ownerDocument.createElement('label');
        lName.textContent = "Name"
        const name = this.ownerDocument.createElement('input');
        name.addEventListener("change", (e:any) => {
            userDatos.name = e.target.value;
        })
        const lColor = this.ownerDocument.createElement('label');
        lColor.textContent = "Color"
        const color = this.ownerDocument.createElement('input');
        color.addEventListener("change", (e:any) => {
            userDatos.color = e.target.value;
        })
        const lLetra = this.ownerDocument.createElement('label');
        lLetra.textContent = "Letter"
        const letra = this.ownerDocument.createElement('input');
        letra.addEventListener("change", (e:any) => {
            userDatos.letra = e.target.value;
        })
        const btn = this.ownerDocument.createElement('button');
        btn.textContent = "Save";
        btn.addEventListener("click", async () => {
            console.log(userDatos)
            firebase.saveDatosInLS(userDatos)
        })

        this.shadowRoot?.appendChild(lName);
        this.shadowRoot?.appendChild(name);
        this.shadowRoot?.appendChild(lColor);
        this.shadowRoot?.appendChild(color);
        this.shadowRoot?.appendChild(lLetra);
        this.shadowRoot?.appendChild(letra);
        this.shadowRoot?.appendChild(btn);
    }
}

customElements.define('app-datos', Datos);
export default Datos;