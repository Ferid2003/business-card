import React from "react"
import header from "./header.css"

export default function Header() {
    return (
        <header className="header">
            <div >
                <div className="header-holder">
                    <div className="profile-holder">
                    </div>
                    <div className="information">
                        <h1 className="name">Farid Aghazada</h1>
                        <h3 className="position">Software Developer</h3>
                        <h4 className="website">github.com/Ferid2003</h4>
                    </div>
                </div>
            </div>
        </header>
    )
}