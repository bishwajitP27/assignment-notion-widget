import React from "react";

export default function Header() {
  return (
    <div className="widget-header flex">
      <section className="widget-header--left flex">
        <section className="globe-icon">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 36C28.8366 36 36 28.8366 36 20C36 11.1634 28.8366 4 20 4C11.1634 4 4 11.1634 4 20C4 28.8366 11.1634 36 20 36ZM8.66357 16.0548C9.41085 13.9072 10.7512 12.0373 12.4884 10.6411C13.0242 11.4593 13.949 11.9998 15 11.9998C16.6569 11.9998 18 13.343 18 14.9998V15.9998C18 18.209 19.7909 19.9998 22 19.9998C24.2092 19.9998 26 18.209 26 15.9998C26 14.1196 27.2973 12.5424 29.0457 12.1144C30.8856 14.2232 32 16.9814 32 19.9998C32 20.6814 31.9432 21.3497 31.8341 22.0002H29.9999C27.7908 22.0002 25.9999 23.791 25.9999 26.0002V30.3945C24.2349 31.4155 22.1855 31.9998 19.9998 31.9998V28C19.9998 25.7909 18.209 24 15.9998 24C13.7907 24 11.9998 22.2091 11.9998 20C11.9998 18.017 10.5568 16.371 8.66357 16.0548Z"
              fill="#6B7280"
            />
          </svg>
        </section>
        <section className="widget-header--info flex flex-column">
          <h5>Share to web</h5>
          <p>Publish and share link with anyone</p>
        </section>
      </section>

      <section className="widget-header--right">
        <input type="checkbox" id="toggleBtn" />
        <label htmlFor="toggleBtn" className="toggle" tabIndex={1}>
          <div className="slider"></div>
        </label>
      </section>
    </div>
  );
}
