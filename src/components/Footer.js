import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        className="bg-light text-center text-lg-start"
        style={{ position: "fixed", left: 0, bottom: 0, right: 0 }}
      >
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright: <span className="text-dark">TodoApp</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
