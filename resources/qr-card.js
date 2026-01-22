export class QrCard extends HTMLElement {
    static styles = (() => {
        const css = `
            :host {
                --color-head: hsl(218, 44%, 22%);
                --color-content: hsl(216, 15%, 48%);
                --text-head: 1.275rem;
                --text-content: 1rem;
                --radius: 0.75rem;
                --spacing-s: 8px;
                --spacing-m: 16px;

                all: unset;
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
                min-width: 256px;
                width: 320px;
                background-color: white;
                padding: var(--spacing-m);
                border-radius: var(--radius);
                box-shadow: 0 24px 32px rgba(0, 0, 0, 0.1);
            }

            .image {
                border-radius: var(--radius);
                overflow: hidden;
                margin: 0;
            }

            ::slotted([slot="image"]) {
                max-width: 100%;
                height: auto;
                display: block;
                aspect-ratio: 1 / 1;
            }

            .text {
                display: flex;
                flex-direction: column;
                padding: var(--spacing-s) 0 var(--spacing-m) 0;
            }

            .head, .content {
                text-align: center;
                padding: var(--spacing-s);
            }

            .head {
                color: var(--color-head);
                font-size: var(--text-head);
                font-weight: 800;
            }

            .content {
                color: var(--color-content);
                font-size: var(--text-content);
            }
        `;

        const stylesheet = new CSSStyleSheet();
        stylesheet.replaceSync(css);
        return stylesheet;
    })();

    constructor() {
        super();
        const root = this.attachShadow({ mode: "open" });
        root.adoptedStyleSheets = [this.constructor.styles];
        root.innerHTML = `
            <figure class="image">
                <slot name="image"></slot>
            </figure>
            <section class="text">
                <div class="head">
                    <slot name="head"></slot>
                </div>
                <div class="content">
                    <slot></slot>
                </div>
            </section>
        `;
    }
}

customElements.define("qr-card", QrCard);
