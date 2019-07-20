import React from "react";
import heroImage from "../images/books-2.jpeg";

const headerStyle = {
  "backgroundImage": `url(${heroImage})`,
  "maxWidth": "100vw",
  height: "calc(100vw * .2736)",
  "backgroundSize": "cover",
  position: "relative"
}

function Header() {
    return (
        <header style={headerStyle}>
            <h1>BookPede</h1>
            <p>Powered by Google Books</p>
        </header>
    );
}

export default Header;