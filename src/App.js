import { Component } from "./core/Component/Component.js";
import "./components/atoms/menu/MenuTabl";
import "./components/atoms/Button/Button";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      inOpen: true,
    };
    this.dataMenu = [
      {
        label: "link 1",
        href: "Google.com",
      },
      {
        label: "link 2",
        href: "Google.com",
      },
      {
        label: "link 3",
        href: "Google.com",
      },
      {
        label: "link 4",
        href: "Google.com",
      },
    ];
  }

  onClick() {}

  componentDidMount() {
    console.log(this.state.inOpen);
    this.addEventListener("click", () => {
      this.setState((state) => {
        return {
          inOpen: state.inOpen ? false : true,
        };
      });
    });
  }

  render() {
    return `
        
        <main-menu dataMenu='${JSON.stringify(this.dataMenu)}' classname="${
      this.state.inOpen ? "close" : "open"
    }"></main-menu>
    `;
  }
}

customElements.define("menu-app", App);
