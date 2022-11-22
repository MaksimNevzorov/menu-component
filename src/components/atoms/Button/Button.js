import { Component } from "../../../core/Component/Component";

export class Button extends Component {
  constructor() {
    super();
    // this.className = this.getAttribute("classname");
  }

  render() {
    return `
            <button class="btn ${this.props.classname}">Chek</button>
        `;
  }
}

customElements.define("simple-button", Button);
