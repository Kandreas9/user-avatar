(()=>{var c=class extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"}),r="https://raw.githubusercontent.com/Kandreas9/user-avatar/2484672f0dec2aa663ef05de1664b9679f88e64d/src/assets/avatar-placeholder.svg";this.size=this.hasAttribute("size")?this.getAttribute("size"):"100",this.src=this.getAttribute("src"),this.shape=this.hasAttribute("shape")?this.getAttribute("shape"):"circle",this.src||(this.src=r);let t=document.createElement("template");t.innerHTML=`
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
                    width: ${this.size*.8660254}px;
				}
            </style>

            <div class='user-avatar ${this.shape}' >
                <input type='file' accept="image/*">
                <img src='${this.src}' alt='avatar image' >
            </div>
            `,e.appendChild(t.content.cloneNode(!0));let s=this.shadowRoot.querySelector(".user-avatar"),a=this.shadowRoot.querySelector(".user-avatar input");s.addEventListener("click",()=>{a.click()}),a.addEventListener("change",()=>{let i=a.files[0],h=URL.createObjectURL(i);document.querySelector("user-avatar").setAttribute("src",h),this.dispatchEvent(new CustomEvent("upload",{detail:i}))})}static get observedAttributes(){return["src"]}attributeChangedCallback(e,r,t){if(e!=="src"||!t)return;let s=this.shadowRoot.querySelector(".user-avatar img");s.src=t}};customElements.define("user-avatar",c);})();
//# sourceMappingURL=user-avatar.js.map
