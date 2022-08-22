import { IoMdShare } from "react-icons/io";
import Header from "./Header";
import Center from "./Center";
import Footer from "./Footer";
import "./index.css";
import { useEffect, useRef, useState } from "react";

export default function ShareWidget(props) {
  const { workspaceMembers } = props;
  const [showWidget, setShowWidget] = useState(false);
  const widgetRef = useRef(null);
  const shareBtnRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      //Close the widget if clicked outside
      const target = event.target;
      if (widgetRef.current && !widgetRef.current.contains(target)) {
        //Return if buttoon is clicked as this case is being handled by the button handler
        if (target.matches(".widget-share--btn") || target.parentElement.matches(".widget-share--btn")) return;
        setShowWidget(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [widgetRef]);

  const showWidgetHandler = (event) => {
    const target = event.target;
    if (target.closest(".widget-container")) return;
    setShowWidget((prev) => !prev);
  };

  return (
    <>
      <div className="widget-share">
        <button className="widget-share--btn flex" tabIndex={1} ref={shareBtnRef} onClick={showWidgetHandler}>
          <span>Share</span>
          <IoMdShare className="share-icon" />
        </button>
        {showWidget && (
          <div className="widget-container" ref={widgetRef}>
            <Header />
            <Center workspaceMembers={workspaceMembers} />
            <Footer />
          </div>
        )}
      </div>
    </>
  );
}
