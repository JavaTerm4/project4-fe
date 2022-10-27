import React, {useRef, useState, useEffect} from "react";
import "./dropdown.css";

const useDetectOutsideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const onClick = e => {
      // If the active element exists and is clicked outside of
      if (el.current !== null && !el.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };

    // If the item is active (ie open) then listen for clicks outside
    if (isActive) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [isActive, el]);

  return [isActive, setIsActive];
};

const Dropdown = props => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  return (
    <div className="dropdown">
      <button onClick={onClick} className="dropdown__toggle">
        {props.icon ? <i className={props.icon}></i> : ""}
        {props.badge ? <span className="dropdown__toggle-badge">{props.badge}</span> : ""}
        {props.customToggle ? props.customToggle() : ""}
      </button>
      <div ref={dropdownRef} className={`dropdown__content ${isActive ? "active" : ""}`}>
        {props.contentData && props.renderItems
          ? props.contentData.map((item, index) => props.renderItems(item, index))
          : ""}
      </div>
    </div>
  );
};

export default Dropdown;
