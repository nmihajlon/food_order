import React from "react";

const Button = ({ children, textOnly, className, ...props }) => {
  const cssClasses = textOnly
    ? `${className} text-button`
    : `${className} button`;

  return <button {...props} className={cssClasses}>{children}</button>;
};

export default Button;