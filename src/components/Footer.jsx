import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ <a href="https://batralakshay.netlify.app/">Lakshay</a> {year}</p>
    </footer>
  );
}

export default Footer;
