(()=>{var i=class extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"});this.size=this.hasAttribute("size")?this.getAttribute("size"):"100",this.src=this.hasAttribute("src")?this.getAttribute("src"):"https://www.nacdnet.org/wp-content/uploads/2016/06/person-placeholder.jpg";let s=document.createElement("template");s.innerHTML=`
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
            `,e.appendChild(s.content.cloneNode(!0));let a=this.shadowRoot.querySelector(".user-avatar"),t=this.shadowRoot.querySelector(".user-avatar input");a.addEventListener("click",()=>{t.click()}),t.addEventListener("change",()=>{let r=t.files[0],n=URL.createObjectURL(r);document.querySelector("user-avatar").setAttribute("src",n),this.dispatchEvent(new CustomEvent("upload",{detail:r}))})}static get observedAttributes(){return["src"]}attributeChangedCallback(e,s,a){if(e!=="src")return;let t=this.shadowRoot.querySelector(".user-avatar img");t.src=a}};customElements.define("user-avatar",i);})();
//# sourceMappingURL=user-avatar.js.map
