/**
Challenge: Complete the Navbar to match the design

Hint: use the Figma file for the most accurate peek at the design
(colors, sizes, fonts, etc.)
*/

import React from "react"

export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <img src="https://i.pinimg.com/originals/5c/7b/53/5c7b53a7be1dd267f24f7559584d1345.jpg" />
                <h3 className="nav--logo_text">ReactFacts</h3>
                <h4 className="nav--title">React Course - Project 1</h4>
            </nav>
        </div>
    )
}