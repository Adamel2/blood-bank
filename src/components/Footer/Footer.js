import React from "react";

function Footer() {
  return (
    <footer className="footer py-3 p-0 bg-info  fixed-bottom">
      <div className="container">
        <span className="text-light font-weight-bold">Blood-Bank Application © {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

export default Footer;
