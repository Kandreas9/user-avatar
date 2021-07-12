class UserAvatar extends HTMLElement {
	constructor() {
		super();

		const shadow = this.attachShadow({ mode: "open" });

		this.size = this.hasAttribute("size")
			? this.getAttribute("size")
			: "100";
		this.src = this.hasAttribute("src")
			? this.getAttribute("src")
			: "https://www.nacdnet.org/wp-content/uploads/2016/06/person-placeholder.jpg";

		const template = document.createElement("template");
		template.innerHTML = `
            <style>
                .user-avatar {
                    border-radius: 50%;
                    overflow: hidden;
                    height: ${this.size}px;
                    width: ${this.size}px;
                    display: flex;
                    justify-content: center;

                }

                .user-avatar input {
                    display: none;
                }

            </style>

            <div class='user-avatar' >
                <input type='file'>
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
		if (name !== "src") return;

		const img = this.shadowRoot.querySelector(".user-avatar img");

		img.src = newValue;
	}
}

customElements.define("user-avatar", UserAvatar);
