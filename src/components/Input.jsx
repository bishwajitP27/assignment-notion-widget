import React from "react";

export default function Input({
  type,
  required,
  id,
  label = null,
  className,
  placeholder = "",
  blurHandler,
  focusHandler,
  reference = null,
}) {
  return (
    <>
      {label && <label htmlFor=""></label>}
      <input
        type={type}
        ref={reference}
        onBlur={blurHandler}
        onFocus={focusHandler}
        placeholder={placeholder}
        className={className}
        id={id}
        required
      />
    </>
  );
}
