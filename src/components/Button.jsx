import React from "react";

export default function Button({ children, className, reference, clickHandler }) {
  return (
    <button ref={reference} onClick={clickHandler} className={className}>
      {children}
    </button>
  );
}
