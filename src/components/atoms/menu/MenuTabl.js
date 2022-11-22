import { Component } from "../../../core/Component/Component";
import "../Button/Button";

export class MenuTabl extends Component {
  constructor() {
    super();
    this.itemMenu = JSON.parse(this.getAttribute("dataMenu"));
  }

  static get observedAttributes() {
    return ["dataMenu", "classname"];
  }

  render() {
    console.log(this.props.classname);
    return `
    <simple-button classname="${this.props.classname} "></simple-button>
    <div class='${this.props.classname}'>
        <ul class='${this.props.classname} hidden-menu'>
            ${this.itemMenu
              .map((item) => {
                return `
                <li><a href="${item.href}">${item.label}</a></li>
                `;
              })
              .join("")}            
            
        </ul>
        </div>
        `;
  }
}

customElements.define("main-menu", MenuTabl);
