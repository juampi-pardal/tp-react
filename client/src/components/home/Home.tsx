import { Component } from "react";

export default class Home extends Component {

  updateDocumentTitle(): void {
    document.title =  "Mercado Libre Argentina - Encontra tu producto al mejor precio";
  }

  componentDidMount() {
    this.updateDocumentTitle();
  }


  render() {
    return (
      <div></div>
    );
  }
}