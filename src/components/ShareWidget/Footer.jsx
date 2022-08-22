import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { BiLink } from "react-icons/bi";
import { useState } from "react";

export default function Footer() {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    const URL = window.location.href;
    copyTextToClipboard(URL)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="widget-footer flex">
      <a href="https://www.notion.so/help/sharing-and-permissions" target="__blank" className="footer-link flex">
        <HiOutlineQuestionMarkCircle className="footer-link--icon" />
        <p className="footer-link-text">learn about sharing</p>
      </a>
      <button className="copy-link flex" onClick={handleCopyClick}>
        <BiLink className="copy-icon" />
        <span className="copy-link--text">Copy link</span>
      </button>
      <section className={`clipboard-link--status ${isCopied ? "show-clipboard--status" : ""}`}>Copied link to clipboard </section>
    </div>
  );
}
