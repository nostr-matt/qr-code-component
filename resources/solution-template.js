export class SolutionTemplate extends HTMLBodyElement {
    static styles = (() => {
        const css = `
            :host {
                margin: 0;
                display: flex;
                flex-direction: column;
                min-height: 100svh;
                @supports (min-height: 100dvh) {
                    min-height: 100dvh;
                }
            }

            main {
                flex: 1;
                display: flex;
            }

            main > h1 {
                display: none;
            }

            :host([center-contents]) main {
                justify-content: center;
                align-items: center;
            }

            footer {
                padding: 8px;
                font-size: 11px;
                text-align: center;
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
            <main>
                <slot></slot>
            </main>
            <footer>
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="https://www.frontendmentor.io/profile/nostr-matt" target="_blank">Matt</a>.
            </footer>
        `;

        this._elements = {
            main: root.querySelector("main")
        };
    }

    static get observedAttributes() {
        return ["implicit-heading"];
    }

    attributeChangedCallback(name, ov, nv) {
        if (ov === nv) return;
        switch (name) {
            case "implicit-heading":
                this._updateHeading(nv);
                break;
        }
    }

    _updateHeading(title) {
        if (title) {
            const heading = Object.assign(document.createElement("h1"), { textContent: title });
            this._elements.main.prepend(heading);
        } else {
            this._elements.main.querySelector("h1")?.remove();
        }
    }
}

customElements.define("solution-template", SolutionTemplate, { extends: "body" });
