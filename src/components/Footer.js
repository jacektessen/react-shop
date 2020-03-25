import React from "react";

const Footer = () => {
  const newDate = new Date();
  const year = newDate.getFullYear();

  return (
    <div className="footer">
      <p>Copyright &copy; XYZ {year}</p>
    </div>
  );
};

export default Footer;
