import React from "react"
import footer from "./footer.css"
import wp from "./assets/Vectorwp.svg"
import twt from "./assets/Vectormes.svg"
import mess from "./assets/Vector.svg"
import link from "./assets/Vectorlink.svg"

// const links = document.querySelector("#link");
//
// links.addEventListener("click",function (event){
//     event.preventDefault();
// })

export default function Footer() {
    return (
        <footer className="ending">
            <div className="socials">
                <a href="https://wa.me/+994506578171" target="_blank"><img className="social-img" id="linkinks" src={wp} alt="wp-img"/></a>
                <a href="https://twitter.com/TenZOfficial" target="_blank"><img className="social-img" id="linkinks" src={twt} alt="twt-img"/></a>
                <a href="https://www.instagram.com/feridagazade_/" target="_blank"><img className="social-img" id="linkinks" src={mess} alt="mess-img"/></a>
                <a href="https://www.linkedin.com/in/ferid-aghazada-054289217/" target="_blank"><img className="social-img" id="linkinks" src={link} alt="link-img"/></a>
            </div>
        </footer>
    )
}