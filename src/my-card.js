import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "The Hermit Crab";
    this.image = "https://upload.wikimedia.org/wikipedia/commons/8/8e/Calliactis_and_Dardanus_001.JPG";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
      display: block;
      }
      .card {
      border-radius: 4px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      margin: 16px;
      width: 300px; /* HERE*/
      border: 15px solid darkBlue;
      padding: 0px;
      margin: 20px;
      }
      :host([fancy]) .card {
      background-color: pink;
      border: 2px solid brown;
      box-shadow: 10px 5px 5px red;
      }
      .clone, .name-change, .pic-change {
      background-color: SaddleBrown;
      border: 3px solid black;
      color: white;
      }
      .bckr-change, .delete-button {
      background-color: SaddleBrown;
      margin: 5px;
      border: 3px solid black;
      color: white;
      }
      .btn-wrapper {
      background-color: tan;
      padding: 10px;
      }
      .btn, .toggle {
      background-color: SaddleBrown;
      color: white;
      font-size: 20px;
      border-radius: 0%;
      padding: 14px 40px;
      width: 80%;
      margin: 4px 10px 10px 32px;
      }
      .btn:focus, .btn:hover {
      background-color: Moccasin;
      color: Chocolate;
      }
      .toggle:focus, .toggle:hover {
      background-color: Moccasin;
      color: Chocolate;
      }
      h1 {
      color: Chocolate;
      margin: 20px;
      }
      p, .desparh {
      color: SaddleBrown;
      margin: 20px;
      }
      .change-color {
      background-color: LightGoldenRodYellow;
      }
      .boarder-color {
      border: 15px solid DarkSeaGreen;
      }
    `;
  }
  openChanged(e) {
    console.log(e.newState);
    if (e.target.open) {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
    
  }
  render() {
    return html`
    <div class="card">
      <div class="btn-wrapper">
        <h1 class="card-Title">${this.title}</h1>
        <p>A hermit crab is a part of the crustacean family and can live up to 10-70 years! They have adapted to abandon their shell and seek out new and better shells based on their needs. This is where they get their name from, as they are constantly growing and always looking for a new home!</p>
        <a href="https://iam.hax.psu.edu/cjs7724/sites/cblog/article-1">
          <button class="btn">Learn more here</button>
        </a>
          <!-- when open = toggle,  -->
        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
            <button class="toggle">Toggle</button>
        </details>
          <meme-maker
          alt="Up your meme game with hax and allow for more accessible memes"
          image-url="https://media.wired.com/photos/593335d0714b881cb296a324/master/w_2560%2Cc_limit/Nemo.jpg"
          bottom-text="just keep swimming"
          top-text="SwImMING">
          </meme-maker>
       <!-- <div id="panel">
          <button class="clone">Clone Card</button>
          <button class="name-change">Change name</button>
          <button class="pic-change">Change picture</button>
          <button class="bckr-change">Change background</button>
          <button class="delete-button">Delete button</button>
        </div> -->
        <details ?open="${this.fancy}">
        <summary>Description</summary>
          <div>
        <slot>${this.description}</slot>
          </div>
        </details>
        <img class="card-image" src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Calliactis_and_Dardanus_001.JPG" style="width: 280px" />
      </div>
    </div>
  `;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      fancy: { type: Boolean, reflect: true },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
