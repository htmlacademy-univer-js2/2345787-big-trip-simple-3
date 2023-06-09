<<<<<<< HEAD
import './loader-view.css';
=======
import './css/loader-view.css';
>>>>>>> 5d73b91888a8a704c5c1096b0435fdaf4ad6674a
import View from './view.js';

/**
 * @implements {EventListenerObject}
 */
export default class LoaderView extends View {
  constructor() {
    super(...arguments);
    this.ownerView = document.body;
    this.classList.add('loader');
  }

  /**
   * @override
   * @param {boolean} flag
   */
  display(flag) {
    this.ownerView[flag ? 'append' : 'removeChild'](this);
    return this;
  }

  connectCallback() {
    this.ownerView.addEventListener('keydown', this);
  }

  disconnectCallback() {
    this.ownerView.removeEventListener('keydown', this);
  }

  /**
   * @param {KeyboardEvent} event
   */
  handleEvent(event) {
    event.preventDefault();
  }
}

customElements.define(String(LoaderView), LoaderView);
