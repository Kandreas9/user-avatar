class UserAvatar extends HTMLElement {
	constructor() {
		super();

		const shadow = this.attachShadow({ mode: "open" });
		const placeholder =
			"https://raw.githubusercontent.com/Kandreas9/user-avatar/2484672f0dec2aa663ef05de1664b9679f88e64d/src/assets/avatar-placeholder.svg";

		this.size = this.hasAttribute("size")
			? this.getAttribute("size")
			: "100";
		this.src = this.getAttribute("src");
		this.shape = this.hasAttribute("shape")
			? this.getAttribute("shape")
			: "circle";

		if (!this.src) {
			this.src = placeholder;
		}

		const template = document.createElement("template");
		template.innerHTML = `
            <style>
                .user-avatar {
                    overflow: hidden;
                    display: flex;
                    justify-content: center;

                }

				.user-avatar input {
                    display: none;
                }

				.circle {
					border-radius: 50%;
					height: ${this.size}px;
                    width: ${this.size}px;
				}

				.hexagon {
					clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
					height:${this.size}px;
                    width: ${this.size * 0.8660254}px;
				}
            </style>

            <div class='user-avatar ${this.shape}' >
                <input type='file' accept="image/*">
                <img src='${this.src}' alt='avatar image' >
            </div>
            `;

		shadow.appendChild(template.content.cloneNode(true));

		const avatarDiv = this.shadowRoot.querySelector(".user-avatar");
		const input = this.shadowRoot.querySelector(".user-avatar input");

		avatarDiv.addEventListener("click", () => {
			input.click();
		});

		input.addEventListener("change", () => {
			const file = input.files[0];
			const url = URL.createObjectURL(file);

			const avatar = document.querySelector("user-avatar");
			avatar.setAttribute("src", url);
			this.dispatchEvent(new CustomEvent("upload", { detail: file }));
		});
	}

	static get observedAttributes() {
		return ["src"];
	}

	attributeChangedCallback(name, _oldValue, newValue) {
		if (name !== "src" || !newValue) return;

		const img = this.shadowRoot.querySelector(".user-avatar img");

		img.src = newValue;
	}
}

customElements.define("user-avatar", UserAvatar);
