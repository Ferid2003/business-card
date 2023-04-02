import React from "react";
import body from "./body.css"

export default function Body() {
    return (
        <div className="main-part">
            <div className="main-part-1">
                <h3 className="Abut-title">About</h3>
                <p className="About">
                    I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn
                </p>
            </div>
            <div className="main-part-2">
                <h3 className="Abut-title">Interests</h3>
                <p className="About">
                    Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic
                </p>
            </div>
        </div>
    )
}